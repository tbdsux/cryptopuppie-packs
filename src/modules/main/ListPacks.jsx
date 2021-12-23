import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import { createResource } from "solid-js";
import { fetchPacks } from "../../lib/packs";
import PackItem from "./PackItem";

function ListPacks() {
  const {
    state: { user },
  } = useWaxAuth();

  const [packs, { refetch }] = createResource(user.wallet, fetchPacks);

  return (
    <div className="my-16">
      {packs.loading && <p className="text-white">Loading...</p>}

      <div>
        {packs()?.length === 0 ? (
          <p className="text-stone-300">
            You have no packs yet from our collection...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-8">
            <For each={packs()}>
              {(item) => <PackItem {...item} refetchPacks={refetch} />}
            </For>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListPacks;
