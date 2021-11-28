import { collection } from "./waxnet";

const fetchPacks = async (account) => {
  const r = await fetch(
    `https://kv5z3m.deta.dev/?collection=${collection}&account=${account}&pack_templates=${
      import.meta.env.VITE_PACKTEMPLATES
    }`
  );

  return await r.json();
};

const fetchClaims = async (account) => {
  const r = await fetch(
    `https://kv5z3m.deta.dev/unclaims?collection=${collection}&account=${account}`
  );

  return await r.json();
};

export { fetchPacks, fetchClaims };
