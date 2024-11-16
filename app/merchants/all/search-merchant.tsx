"use client";
import { getBuiltGraphSDK } from "@/.graphclient";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function SearchMerchant() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { GetMerchantByName } = getBuiltGraphSDK();

  // Fetch merchants based on the search query
  const { data, isLoading, error } = useQuery({
    queryKey: ["SearchMerchant", searchQuery],
    async queryFn() {
      return await GetMerchantByName({
        name: searchQuery,
      });
    },
    enabled: !!searchQuery, // Only fetch when there is a query
  });

  console.log(data);

  return (
    <div className="mt-4">
      <input
        type="text"
        className="w-full p-2 border border-gray-200 rounded-md"
        placeholder="Search merchant"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Handle Loading State */}
      {isLoading && <p className="mt-2 text-gray-500">Loading...</p>}

      {/* Handle Error State */}
      {error && <p className="mt-2 text-red-500">Error loading merchants</p>}

      {/* Display Results */}
      {data?.merchantSearch.length! > 0 ? (
        <ul className="mt-4 space-y-2">
          {data?.merchantSearch.map((merchant) => (
            <li
              key={merchant.id}
              className="p-2 border border-gray-200 rounded-md"
            >
              <Link
                target="_blank"
                href={`https://app.ens.domains/${merchant.name}.perkly.eth`}
                className="text-xl font-semibold"
              >
                {merchant.name}
              </Link>
              <p className="text-sm text-gray-500">{merchant.id}</p>
              <div>Subscribers: {merchant.subscribers.length}</div>
            </li>
          ))}
        </ul>
      ) : (
        searchQuery &&
        !isLoading && <p className="mt-2 text-gray-500">No merchants found</p>
      )}
    </div>
  );
}
