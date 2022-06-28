import { LightGodwokenTokenType } from "../configTypes";

export const tokens: LightGodwokenTokenType[] = [
  {
    id: 80,
    symbol: "TTKN",
    name: "Godwoken Bridge Test Token",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/nervos-network-ckb-logo.svg?v=002",
    address: "0x3c41edd22658b2d6cf0eb26da941d74fe45bea52",
    l1LockArgs: "0x58bef38794236b315b7c23fd8132d7f42676228d659b291936e8c6c7ba9f064e",
  },
  {
    id: 29378,
    symbol: "DAI|eth",
    name: "Wrapped DAI (ForceBridge from Ethereum)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=002",
    address: "0x24a9467fd390d8ca70e848ce8a2e9bbe087eab0e",
    l1LockArgs: "0xcb8c7b352d88142993bae0f6a1cfc0ec0deac41e3377a2f7038ff6b103548353",
  },
  {
    id: 29407,
    symbol: "USDC|eth",
    name: "Wrapped USDC (ForceBridge from Ethereum)",
    decimals: 6,
    tokenURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=002",
    address: "0x20FB98bb94aD9B98c0f0089138012E49323d0fEf",
    l1LockArgs: "0x5497b6d3d55443d573420ca8e413ee1be8553c6f7a8a6e36bf036bf71f0e3c39",
  },
  {
    id: 29406,
    symbol: "USDT|eth",
    name: "Wrapped USDT (ForceBridge from Ethereum)",
    decimals: 6,
    tokenURI: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=002",
    address: "0x90fc553aBad2b8B6ffe9282e36db52cE6388C648",
    l1LockArgs: "0xf0a746d4d8df5c18826e11030c659ded11e7218b854f86e6bbdc2af726ad1ec3",
  },
  {
    id: 5681,
    symbol: "ETH|eth",
    name: "Wrapped ETH (ForceBridge from Ethereum)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002",
    address: "0xf0d66bf1260D21fE90329A7A311e84979FEB004d",
    l1LockArgs: "0x1b072aa0ded384067106ea0c43c85bd71bafa5afdb432123511da46b390a4e33",
  },
];
