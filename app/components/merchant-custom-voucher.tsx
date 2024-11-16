import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MerchantCustomVoucher({
  businessName,
  onSubmit,
}: {
  businessName: string;
  onSubmit: (formData: any) => void;
}) {
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hash, setHash] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async () => {
    if (!discount || !image) {
      alert("Please provide both a discount and an image.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload the image to Tatum IPFS
      const formData = new FormData();
      formData.append("file", image);

      const tatumLink = process.env.NEXT_PUBLIC_TATUM_BASE_URL as string;
      const apiKey = process.env.NEXT_PUBLIC_TATUM_API_KEY as string;

      const imageResponse = await fetch(tatumLink, {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
        },
        body: formData,
      });

      if (!imageResponse.ok) {
        throw new Error("Failed to upload image to IPFS.");
      }

      const imageData = await imageResponse.json();
      const ipfsHash = imageData.ipfsHash;
      console.log("Image uploaded to IPFS:", ipfsHash);

      // Create the schema.json content
      const schema = {
        name: `${businessName} Voucher`,
        description: `Discount amount: ${discount}%`,
        image: `ipfs://${ipfsHash}`,
      };

      // Convert schema to Blob and upload as a file
      const schemaFile = new Blob([JSON.stringify(schema)], {
        type: "application/json",
      });
      const schemaFormData = new FormData();
      schemaFormData.append("file", schemaFile, "schema.json");

      const schemaResponse = await fetch(tatumLink, {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
        },
        body: schemaFormData,
      });

      if (!schemaResponse.ok) {
        throw new Error("Failed to upload schema to IPFS.");
      }

      const schemaData = await schemaResponse.json();
      console.log("Schema uploaded to IPFS:", schemaData);

      // Call the onSubmit handler with the schema IPFS hash
      onSubmit({
        discount,
        schemaUrl: `ipfs://${schemaData.ipfsHash}`,
      });

      // Clear the form
      setDiscount("");
      setImage(null);
      setHash(schemaData.ipfsHash);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Merchant Custom Voucher</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discount
            </label>
            <textarea
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter a discount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {image && (
            <div className="mt-2">
              <p className="text-sm text-gray-500">Selected Image:</p>
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded Preview"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          )}
          <Button
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="bg-black text-white"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          {hash && (
            <div className="mt-4 text-sm text-gray-700">
              IPFS Hash: <strong>{hash}</strong>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
