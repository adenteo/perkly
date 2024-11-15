"use client";
import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from "@tanstack/react-query";
import { http } from "viem";
import { baseSepolia, sepolia } from "viem/chains";
import { PrivyProvider } from "@privy-io/react-auth";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}
let browserQueryClient: QueryClient | undefined = undefined;
function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // const config = createConfig({
  //   chains: [baseSepolia, sepolia],
  //   // multiInjectedProviderDiscovery: false,
  //   transports: {
  //     [baseSepolia.id]: http(),
  //     [sepolia.id]: http(),
  //   },
  // });
  const queryClient = getQueryClient();

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        supportedChains: [baseSepolia, sepolia],
        // Create embedded wallets for users who don't have a wallet
        defaultChain: baseSepolia,
        embeddedWallets: {
          createOnLogin: "all-users",
          // noPromptOnSignature: true,
        },
        fundingMethodConfig: {
          moonpay: {
            paymentMethod: "credit_debit_card",
            uiConfig: { accentColor: "#696FFD", theme: "light" },
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        {/* <WagmiProvider config={config}> */}
        {/* <BiconomyProvider
              config={{
                biconomyPaymasterApiKey,
                bundlerUrl,
                // Add your signer here if you don't want to use the metamask signer
              }}
              queryClient={queryClient}
            > */}
        {children}
        {/* </BiconomyProvider> */}
        {/* </WagmiProvider> */}
      </QueryClientProvider>
    </PrivyProvider>
  );
}
