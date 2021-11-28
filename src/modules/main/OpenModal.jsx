import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import { createEffect, createSignal, Show } from "solid-js";
import PackModal from "./PackModal";

function OpenModal(props) {
  const {
    state: { user },
    getSession,
  } = useWaxAuth();

  const [open, setOpen] = createSignal(false);
  const [done, setDone] = createSignal(false);

  createEffect(() => {
    if (done()) {
      props.refetchPacks();

      setDone(false);
    }
  });

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Show
        when={open()}
        fallback={
          <button
            title="Open this pack"
            onClick={async () => {
              const session = await getSession(user);
              if (!session) return;

              session
                .transact({
                  actions: [
                    {
                      account: "atomicassets",
                      name: "transfer",
                      authorization: [
                        {
                          actor: user.wallet,
                          permission:
                            user.type === "anchor" ? user.permission : "active",
                        },
                      ],
                      data: {
                        from: user.wallet,
                        to: "atomicpacksx",
                        asset_ids: [props.asset_id],
                        memo: "unbox",
                      },
                    },
                  ],
                })
                .then((r) => {
                  setOpen(true);
                })
                .catch((e) => {
                  console.error(e);
                });
            }}
            className="bg-coolGray-600 hover:bg-coolGray-700 text-white py-2 px-6 rounded-lg text-sm"
          >
            open
          </button>
        }
      >
        <PackModal
          {...props}
          closeModal={() => {
            setDone(true);
            setOpen(false);
          }}
        />
      </Show>
    </div>
  );
}

export default OpenModal;
