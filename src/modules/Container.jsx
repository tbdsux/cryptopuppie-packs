import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import WalletLogin from "./auth/WalletLogin";
import MyPacks from "./main/MyPacks";

function Container() {
  const { isLoggedIn } = useWaxAuth();

  return (
    <div className="mt-12">
      <div className="w-5/6 mx-auto">
        {isLoggedIn() ? <MyPacks /> : <WalletLogin />}
      </div>
    </div>
  );
}

export default Container;
