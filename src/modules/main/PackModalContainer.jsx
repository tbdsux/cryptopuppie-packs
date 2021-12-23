import { Show } from "solid-js";
import { useClaim } from "../../components/ClaimProvider";
import PackClaim from "./PackClaim";
import PackModalAssets from "./PackModalAssets";

function PackModalContainer() {
  const { claimed, props: claimprops } = useClaim();

  return (
    <>
      <div
        className="absolute h-full w-full z-30"
        onClick={() => {
          // close only if claimed
          if (claimed()) {
            claimprops.closeModal();
          }
        }}
      ></div>

      <div className="z-50 bg-stone-100 w-full max-w-xl lg:max-w-4xl px-8 py-6 rounded-lg">
        <h3 className="text-2xl font-black tracking-wide">Claim Assets</h3>
        <p className="mt-2 text-sm">
          Claim the assets from your pack. Unclaimed assets will be show below
          your packs.
        </p>

        <Show when={claimed()}>
          <p className="my-2 text-green-500">
            You have successfully claimed this pack.
          </p>
        </Show>

        <div>
          <PackModalAssets />
        </div>

        <PackClaim />
      </div>
    </>
  );
}

export default PackModalContainer;
