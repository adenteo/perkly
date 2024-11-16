"use client";
import type {
  MethodCallResponse,
  PostMethodArgs,
  TransactionToSignResponse,
} from "@curvegrid/multibaas-sdk";
import {
  Configuration,
  ContractsApi,
  EventQueriesApi,
} from "@curvegrid/multibaas-sdk";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import type { SendTransactionParameters } from "@wagmi/core";
import { useCallback, useMemo } from "react";
// import { useAccount } from "wagmi";

interface MultiBaasHook {
  getMultiplier: () => Promise<number | null>;
  rollNewMultiplier: (addr: string) => Promise<SendTransactionParameters>;
  initiateAirdrop: (
    addr: string[],
    tokenUri: string
  ) => Promise<SendTransactionParameters>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getVoucherEvents: () => Promise<any | null>;
}

const useMultiBaas = (): MultiBaasHook => {
  const mbBaseUrl = process.env.NEXT_PUBLIC_MULTIBAAS_DEPLOYMENT_URL || "";
  const mbApiKey = process.env.NEXT_PUBLIC_MULTIBAAS_DAPP_USER_API_KEY || "";
  const perklyTokenContractLabel =
    process.env.NEXT_PUBLIC_MULTIBAAS_PERKLY_TOKEN_CONTRACT_LABEL || "";
  const perklyTokenAddressLabel =
    process.env.NEXT_PUBLIC_MULTIBAAS_PERKLY_TOKEN_ADDRESS_LABEL || "";
  const perklyVoucherContractLabel =
    process.env.NEXT_PUBLIC_MULTIBAAS_PERKLY_VOUCHER_CONTRACT_LABEL || "";
  const perklyVoucherAddressLabel =
    process.env.NEXT_PUBLIC_MULTIBAAS_PERKLY_VOUCHER_ADDRESS_LABEL || "";

  const chain = "ethereum";

  // Memoize mbConfig
  const mbConfig = useMemo(() => {
    return new Configuration({
      basePath: new URL("/api/v0", mbBaseUrl).toString(),
      accessToken: mbApiKey,
    });
  }, [mbBaseUrl, mbApiKey]);

  // Memoize Api
  const contractsApi = useMemo(() => new ContractsApi(mbConfig), [mbConfig]);
  const eventsQueryApi = useMemo(
    () => new EventQueriesApi(mbConfig),
    [mbConfig]
  );
  //   const { address, isConnected } = useAccount();

  // Function to get the current multiplier from the PerklyMasterToken contract
  const getMultiplier = useCallback(async (): Promise<number | null> => {
    try {
      const response = await contractsApi.callContractFunction(
        chain,
        perklyTokenAddressLabel,
        perklyTokenContractLabel,
        "multiplier",
        {
          args: [],
          contractOverride: true,
        }
      );
      if (response.data.result.kind === "MethodCallResponse") {
        return parseInt(response.data.result.output, 10);
      }
      return null;
    } catch (error) {
      console.error("Error getting multiplier:", error);
      return null;
    }
  }, [contractsApi, chain, perklyTokenAddressLabel, perklyTokenContractLabel]);

  const callContractFunction = useCallback(
    async (
      sc: string,
      methodName: string,
      args: PostMethodArgs["args"] = []
    ): Promise<
      MethodCallResponse["output"] | TransactionToSignResponse["tx"]
    > => {
      const payload: PostMethodArgs = {
        args,
        contractOverride: true,
        from: "0x2953161C2C1c004a4868595e2b1b839c499660e1",
        // ...(client && client.account ? { from: client.account.address } : {}),
      };
      console.log(payload, "payload");
      const addressLabel =
        sc === "voucher" ? perklyVoucherAddressLabel : perklyTokenAddressLabel;
      const contractLabel =
        sc === "voucher"
          ? perklyVoucherContractLabel
          : perklyTokenContractLabel;
      const response = await contractsApi.callContractFunction(
        chain,
        addressLabel,
        contractLabel,
        methodName,
        payload
      );

      if (response.data.result.kind === "MethodCallResponse") {
        return response.data.result.output;
      } else if (response.data.result.kind === "TransactionToSignResponse") {
        return response.data.result.tx;
      } else {
        throw new Error(
          `Unexpected response type: ${response.data.result.kind}`
        );
      }
    },
    [
      contractsApi,
      chain,
      perklyTokenAddressLabel,
      perklyTokenContractLabel,
      perklyVoucherAddressLabel,
      perklyVoucherContractLabel,
    ]
  );

  // Function to roll a new multiplier in the PerklyMasterToken contract
  const rollNewMultiplier = useCallback(
    async (addr: string): Promise<SendTransactionParameters> => {
      return await callContractFunction("token", "rollNewMultiplier", [addr]);
    },
    [callContractFunction]
  );

  const initiateAirdrop = useCallback(
    async (
      addrs: string[],
      tokenUri: string
    ): Promise<SendTransactionParameters> => {
      return await callContractFunction("voucher", "initiateAirdrop", [
        addrs,
        tokenUri,
      ]);
    },
    [callContractFunction]
  );

  const getVoucherEvents =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useCallback(async (): Promise<any | null> => {
      try {
        const response = await eventsQueryApi.executeEventQuery("nft tokens", 0, 50);
        return response.data.result;
      } catch (error) {
        console.error("Error fetching voucher events:", error);
        return null;
      }
    }, [eventsQueryApi]);

  return {
    getVoucherEvents,
    rollNewMultiplier,
    getMultiplier,
    initiateAirdrop,
  };
};

export default useMultiBaas;
