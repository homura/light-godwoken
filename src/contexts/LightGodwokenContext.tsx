import detectEthereumProvider from "@metamask/detect-provider";
import React, { createContext, useEffect, useState } from "react";
import { LightGodwoken } from "../light-godwoken";
import { LightGodwoken as DefaultLightGodwoken } from "../light-godwoken/index";
import DefaultLightGodwokenProvider from "../light-godwoken/lightGodwokenProvider";

export const LightGodwokenContext = createContext<LightGodwoken | null>(null);

const addNetwork = (ethereum: any) => {
  ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x315db00000006",
        chainName: "GodwokenV1",
        nativeCurrency: {
          name: "pETH",
          symbol: "pETH",
          decimals: 18,
        },
        rpcUrls: ["https://godwoken-testnet-web3-v1-rpc.ckbapp.dev"],
        blockExplorerUrls: ["https://v1.aggron.gwscan.com/"],
      },
    ],
  });
};

export const Provider: React.FC = (props) => {
  const [lightGodwoken, setLightGodwoken] = useState<LightGodwoken>();

  useEffect(() => {
    detectEthereumProvider().then((ethereum: any) => {
      addNetwork(ethereum);

      ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (!accounts || !accounts[0]) return;

        const instance = new DefaultLightGodwoken(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v1"));
        setLightGodwoken(instance);
      });

      ethereum.on("accountsChanged", (accounts: string[] | undefined) => {
        if (!accounts || !accounts[0]) return setLightGodwoken(undefined);

        const provider = new DefaultLightGodwoken(
          new DefaultLightGodwokenProvider(ethereum.selectedAddress, ethereum, "v1"),
        );
        setLightGodwoken(provider);
      });
    });
  }, []);

  return <LightGodwokenContext.Provider value={lightGodwoken || null}>{props.children}</LightGodwokenContext.Provider>;
};
