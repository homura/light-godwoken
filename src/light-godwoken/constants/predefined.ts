/**
 * typed predefined static configuration,
 * exposes the predefined config by environment variable
 */

import { tokens as V0MainnetTokenList } from "./v0-mainnet/tokens";
import { tokens as V1MainnetTokenList } from "./v1-mainnet/tokens";
import { tokens as V0TestnetTokenList } from "./v0-testnet/tokens";
import { tokens as V1TestnetTokenList } from "./v1-testnet/tokens";
import { isMainnet } from "../env";
import { LightGodwokenTokenType } from "./configTypes";

export interface Predefined {
  tokenList: LightGodwokenTokenType[];
}

export interface V0Predefined extends Predefined {}

export interface V1Predefined extends Predefined {}

const v0: V0Predefined = (() => {
  if (isMainnet) {
    return { tokenList: V0MainnetTokenList };
  }

  return {
    tokenList: V0TestnetTokenList,
  };
})();

const v1: V1Predefined = (() => {
  if (isMainnet) {
    return { tokenList: V1MainnetTokenList };
  }

  return { tokenList: V1TestnetTokenList };
})();

export const predefined = { v0, v1 };
