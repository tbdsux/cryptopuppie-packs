import { useWaxAuth } from "@cryptopuppie/solid-waxauth";
import { isTestnet } from "../../lib/waxnet";

function WalletLogin() {
  const {
    functions: { loginWithAnchor, loginWithCloudWalet },
  } = useWaxAuth();

  return (
    <div className="text-center my-20">
      <h3 className="text-2xl font-black underline text-neutral-300">
        Login with Your Wallet
      </h3>

      <div className="mt-6 inline-flex items-center justify-center flex-wrap">
        {!isTestnet && (
          <button
            onClick={loginWithCloudWalet}
            type="button"
            className="m-1 py-3 px-8 rounded-md bg-neutral-500 hover:bg-neutral-600 text-neutral-100 font-bold"
          >
            With Wax Cloud Wallet
          </button>
        )}

        <button
          onClick={loginWithAnchor}
          type="button"
          className="m-1 py-3 px-8 rounded-md bg-blue-500 hover:bg-blue-600 text-neutral-100 font-bold"
        >
          With Anchor
        </button>
      </div>
    </div>
  );
}

export default WalletLogin;
