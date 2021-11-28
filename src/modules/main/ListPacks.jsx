import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import { createResource } from "solid-js";
import { fetchPacks } from "../../lib/packs";
import PackItem from "./PackItem";

function ListPacks() {
  const {
    state: { user },
  } = useWaxAuth();

  const [packs] = createResource(user.wallet, fetchPacks);

  return (
    <div className="my-16">
      {packs.loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid grid-cols-4 gap-8">
          <For each={packs()}>{(item) => <PackItem {...item} />}</For>
        </div>
      )}
    </div>
  );
}

export default ListPacks;
