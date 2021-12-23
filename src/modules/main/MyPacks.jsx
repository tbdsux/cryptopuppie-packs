import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import ListPacks from "./ListPacks";
import ListUnclaims from "./ListUnclaims";

function MyPacks() {
  const {
    state,
    functions: { logout },
  } = useWaxAuth();

  return (
    <div className="">
      <div className="flex items-center justify-between flex-wrap">
        <h3 className="text-3xl font-black underline text-gray-100">
          My Packs
        </h3>

        <div className="text-right m-1">
          <p className="text-lg font-bold tracking-wide text-warmGray-300">
            @{state.user?.wallet}
          </p>

          <small>
            <button
              title="Logout account"
              onClick={logout}
              className="text-warmGray-500 hover:underline"
              type="button"
            >
              logout
            </button>
          </small>
        </div>
      </div>

      <div>
        <ListPacks />
      </div>

      <hr className="my-4 border-warmGray-700" />

      <div>
        <ListUnclaims />
      </div>
    </div>
  );
}

export default MyPacks;
