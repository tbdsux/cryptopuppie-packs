import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import ListPacks from "./ListPacks";
import ListUnclaims from "./ListUnclaims";

function MyPacks() {
  const { state } = useWaxAuth();

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-black underline text-gray-300">
          My Packs
        </h3>

        <p className="font-bold tracking-wide text-white">
          @{state.user.wallet}
        </p>
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
