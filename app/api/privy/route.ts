import prisma from "@/lib/db";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.wallet.type !== "smart_wallet") {
      return Response.json({ error: "Invalid wallet type" }, { status: 400 });
    }
    console.log("body", body);
    let email = "";
    body.user.linked_accounts.forEach((account: any) => {
      if ("email" in account) {
        email = account.email;
      }
    });
    if (!email) {
      return Response.json({ error: "Email not found" }, { status: 400 });
    }
    const user = await prisma.user.create({
      data: {
        id: body.user.id,
        email,
        username: email.split("@")[0],
        walletAddress: body.wallet.address,
      },
    });
    return Response.json({ status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
