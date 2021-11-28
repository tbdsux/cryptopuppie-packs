import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import { createResource } from "solid-js";
import { fetchClaims } from "../../lib/packs";
import PackItem from "./ClaimItem";

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

        <div className="grid grid-cols-4 gap-8">
          <For each={packs()}>
            {(item) => <PackItem {...item} refetchPacks={refetch} claim />}
          </For>
        </div>
      </div>
    </div>
  );
}

export default ListUnclaims;
