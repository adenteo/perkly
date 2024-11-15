import prisma from "@/lib/db";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.type === "user.wallet_created") {
      await prisma.user.create({
        data: {
          id: body.user.id,
          email: body.user.linked_accounts[0].email,
          username: body.user.linked_accounts[0].email.split("@")[0],
          walletAddress: body.user.wallet.address,
        },
      });
      return Response.json({ status: 201 });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
