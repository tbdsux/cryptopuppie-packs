import { collection } from "./waxnet";

const fetchPacks = async (account) => {
  const r = await fetch(
    `https://kv5z3m.deta.dev/?collection=${collection}&account=${account}`
  );

  return await r.json();
};

export { fetchPacks };
