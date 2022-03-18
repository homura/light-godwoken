import detectEthereumProvider from "@metamask/detect-provider";
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  LightGodwokenV1 as DefaultLightGodwokenV1,
  LightGodwoken as DefaultLightGodwoken,
} from "../light-godwoken/index";
import DefaultLightGodwokenProvider from "../light-godwoken/lightGodwokenProvider";

export const LightGodwokenContext = createContext<DefaultLightGodwokenV1 | DefaultLightGodwoken | null>(null);
LightGodwokenContext.displayName = "LightGodwokenContext";
export const Provider: React.FC = (props) => {
  const [lightGodwoken, setLightGodwoken] = useState<DefaultLightGodwokenV1 | DefaultLightGodwoken>();
  const location = useLocation();
  useEffect(() => {
    detectEthereumProvider().then((ethereum: any) => {
      ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (!accounts || !accounts[0]) return;

        let instance: DefaultLightGodwokenV1 | DefaultLightGodwoken;
        if (location.pathname.startsWith("/v0") && lightGodwoken?.getVersion() !== "v0") {
          instance = new DefaultLightGodwoken(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v0"));
          setLightGodwoken(instance);
        } else if (location.pathname.startsWith("/v1") && lightGodwoken?.getVersion() !== "v1") {
          instance = new DefaultLightGodwokenV1(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v1"));
          setLightGodwoken(instance);
        }
      });

      ethereum.on("accountsChanged", (accounts: string[] | undefined) => {
        if (!accounts || !accounts[0]) return setLightGodwoken(undefined);

        let instance: DefaultLightGodwokenV1 | DefaultLightGodwoken;
        if (location.pathname.startsWith("/v0")) {
          instance = new DefaultLightGodwoken(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v0"));
        } else {
          instance = new DefaultLightGodwokenV1(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v1"));
        }
        setLightGodwoken(instance);
      });
    });
  }, [lightGodwoken, location.pathname]);

  return <LightGodwokenContext.Provider value={lightGodwoken || null}>{props.children}</LightGodwokenContext.Provider>;
};