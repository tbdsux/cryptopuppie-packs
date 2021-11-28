import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import ListPacks from "./ListPacks";
import Unclaims from "./Unclaims";

function MyPacks() {
  const { state } = useWaxAuth();

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black underline text-gray-300">
          My Packs
        </h3>

        <p className="font-bold tracking-wide text-white">
          @{state.user.wallet}
        </p>
      </div>

      <div>
        <ListPacks />
      </div>

      <div>
        <Unclaims />
      </div>
    </div>
  );
}

export default MyPacks;
