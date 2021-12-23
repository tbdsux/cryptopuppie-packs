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
              if (props.claim) {
                setOpen(true);
                return;
              }

              const session = await getSession(user);
              if (!session) return;

              session
                .transact(
                  {
                    actions: [
                      {
                        account: "atomicassets",
                        name: "transfer",
                        authorization: [
                          {
                            actor: user.wallet,
                            permission:
                              user.type === "anchor"
                                ? user.permission
                                : "active",
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
                  },
                  user.type === "wax-cloud-wallet"
                    ? {
                        blocksBehind: 3,
                        expireSeconds: 1200,
                      }
                    : null
                )
                .then((r) => {
                  setOpen(true);
                })
                .catch((e) => {
                  console.error(e);
                });
            }}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-lg text-sm"
          >
            {props.claim ? "claim" : "open"}
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
