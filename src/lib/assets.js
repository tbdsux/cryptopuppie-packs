import { atomicassets, collection } from "./waxnet";

const fetchClaimAssets = async (scope) => {
  let x = [];

  while (x.length === 0) {
    const r = await fetch(`https://kv5z3m.deta.dev/claimassets?scope=${scope}`);

    x = await r.json();
  }

  return x;
};

const fetchTemplateAssets = async (templates) => {
  const r = await fetch(
    `${atomicassets}/atomicassets/v1/templates?collection_name=${collection}&ids=${templates}&page=1&limit=1000&order=desc&sort=created`
  );

  const d = await r.json();

  return d.data;
};

export { fetchClaimAssets, fetchTemplateAssets };
