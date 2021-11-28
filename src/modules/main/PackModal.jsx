import { createEffect, createResource, createSignal } from "solid-js";
import { Portal } from "solid-js/web";
import { fetchClaimAssets } from "../../lib/assets";
import PackClaim from "./PackClaim";
import PackModalAssets from "./PackModalAssets";

function PackModal(props) {
  const [assets] = createResource(props.asset_id, fetchClaimAssets);
  const [claimed, setClaimed] = createSignal(false);
  const [templates, setTemplates] = createSignal("");

  createEffect(() => {
    if (assets.loading) return;

    const temps = assets().map((r) => r.template_id);

    setTemplates(temps.join(","));
  });

  return (
    <Portal>
      <div className="fixed w-full h-full bg-black/60 z-50 inset-0 flex items-center justify-center">
        <div
          className="absolute h-full w-full z-30"
          onClick={() => {
            // close only if claimed
            if (claimed()) {
              props.closeModal();
            }
          }}
        ></div>

        <div className="z-50 bg-warmGray-100 w-full max-w-xl px-8 py-6 rounded-lg">
          <h3 className="text-2xl font-black tracking-wide">Claim Assets</h3>
          <p className="mt-2 text-sm">
            Claim the assets from your pack. Unclaimed assets will be show below
            your packs.
          </p>

          <div>
            <PackModalAssets templates={templates} />
          </div>

          <PackClaim
            claimed={claimed}
            setClaimed={() => setClaimed(true)}
            asset_id={props.asset_id}
            origins={assets().map((r) => r.origin_roll_id)}
          />
        </div>
      </div>
    </Portal>
  );
}

export default PackModal;
