const endpoint = import.meta.env.VITE_WAXNET ?? "";
const chainId = import.meta.env.VITE_WAXCHAIN ?? "";
const dApp = "packs.cryptopuppie";
const isTestnet = (import.meta.env.VITE_ISTESTNET ?? "") === "true";
const atomicassets = import.meta.env.VITE_ATOMICASSETS_API ?? "";
const collection = import.meta.env.VITE_COLLECTION ?? "";
const api = import.meta.env.VITE_API ?? "";

export { endpoint, chainId, dApp, isTestnet, atomicassets, collection, api };
