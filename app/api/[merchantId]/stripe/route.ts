import { creditUser } from "@/chainlink/credit-stripe";
import prisma from "@/lib/db";
export async function POST(
  request: Request,
  { params }: { params: Promise<{ merchantId: string }> }
) {
  console;
  const merchantId = (await params).merchantId;
  const body = await request.json();
  const stripeEventId = body.id;
  const email = body.data.object.customer_details.email;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const merchant = await prisma.merchant.findUnique({
    where: {
      apiKey: merchantId,
    },
  });

  if (
    !existingUser ||
    !existingUser.walletAddress ||
    !merchant ||
    !merchant.walletAddress
  ) {
    return Response.json(
      { error: "User or merchant not found" },
      { status: 404 }
    );
  }

  const result = await creditUser(
    stripeEventId,
    existingUser.walletAddress,
    merchant.walletAddress
  );

  return Response.json({
    status: "success",
    tx: result,
  });
}
