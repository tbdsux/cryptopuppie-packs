import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import { createResource } from "solid-js";
import { fetchClaims } from "../../lib/packs";
import PackItem from "./PackItem";

function ListUnclaims() {
  const {
    state: { user },
  } = useWaxAuth();

  const [packs, { refetch }] = createResource(user.wallet, fetchClaims);

  return (
    <div className="my-16">
      <h3 className="mb-4 text-2xl font-black text-gray-200">My Unclaims</h3>

      <div>
        {packs.loading && <p className="text-white">Loading...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-8">
          <For each={packs()}>
            {(item) => <PackItem {...item} refetchPacks={refetch} claim />}
          </For>
        </div>
      </div>
    </div>
  );
}

export default ListUnclaims;
