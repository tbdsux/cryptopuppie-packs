import { api, collection } from "./waxnet";

const fetchPacks = async (account) => {
  const r = await fetch(
    `${api}/?collection=${collection}&account=${account}&schema_pack=${
      import.meta.env.VITE_SCHEMAPACKS
    }`
  );

  return await r.json();
};

const fetchClaims = async (account) => {
  const r = await fetch(
    `${api}/unclaims?collection=${collection}&account=${account}`
  );

  return await r.json();
};

export { fetchPacks, fetchClaims };
