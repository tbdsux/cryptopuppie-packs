import { useWaxAuth } from "@cryptopuppie/solid-waxauth";

function PackClaim(props) {
  const {
    state: { user },
    getSession,
  } = useWaxAuth();

  const claimAssets = async () => {
    const session = await getSession(user);
    if (!session) return;

    const { asset_id, origins } = props;

    session
      .transact({
        actions: [
          {
            account: "atomicpacksx",
            name: "claimunboxed",
            authorization: [
              {
                actor: user.wallet,
                permission: user.type === "anchor" ? user.permission : "active",
              },
            ],
            data: {
              pack_asset_id: Number(asset_id),
              origin_roll_ids: origins,
            },
          },
        ],
      })
      .then((r) => {
        props.setClaimed();
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="text-center mt-8">
      <button
        disabled={props.claimed()}
        className="bg-warmGray-500 hover:bg-warmGray-600 text-white py-2 px-8 rounded-lg"
        onClick={claimAssets}
      >
        {props.claimed() ? "Claimed" : "Claim"}
      </button>
    </div>
  );
}

export default PackClaim;
