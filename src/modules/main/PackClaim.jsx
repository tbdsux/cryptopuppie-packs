import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import { Show } from "solid-js";
import { useClaim } from "../../components/ClaimProvider";

function PackClaim() {
  const {
    state: { user },
    getSession,
  } = useWaxAuth();
  const { props: claimprops, claimed, setClaimed, assets } = useClaim();

  const claimAssets = async () => {
    const session = await getSession(user);
    if (!session) return;

    const { asset_id } = claimprops;
    const origins = assets().map((r) => r.origin_roll_id);

    session
      .transact(
        {
          actions: [
            {
              account: "atomicpacksx",
              name: "claimunboxed",
              authorization: [
                {
                  actor: user.wallet,
                  permission:
                    user.type === "anchor" ? user.permission : "active",
                },
              ],
              data: {
                pack_asset_id: Number(asset_id),
                origin_roll_ids: origins,
              },
            },
          ],
        },
        user.type === "wax-cloud-wallet"
          ? {
              blocksBehind: 3,
              expireSeconds: 1200,
            }
          : null
      )
      .then((r) => {
        setClaimed(true);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="text-center mt-8">
      <Show when={assets()?.length > 0}>
        <button
          disabled={claimed()}
          className="bg-warmGray-500 hover:bg-warmGray-600 text-white py-2 px-8 rounded-lg"
          onClick={claimAssets}
        >
          {claimed() ? "CLAIMED" : "Claim"}
        </button>
      </Show>
    </div>
  );
}

export default PackClaim;
