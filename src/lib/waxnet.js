const endpoint = import.meta.env.VITE_WAXNET ?? "";
const chainId = import.meta.env.VITE_WAXCHAIN ?? "";
const dApp = "packs.cryptopuppie";
const isTestnet = Boolean(import.meta.env.VITE_ISTESTNET);

export { endpoint, chainId, dApp, isTestnet };
