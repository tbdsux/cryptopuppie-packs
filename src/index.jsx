import { WaxAuthProvider } from "@cryptopuppie/solid-waxauth";
import { render } from "solid-js/web";
import App from "./App";
import "./index.css";
import { chainId, dApp, endpoint } from "./lib/waxnet";

render(
  () => (
    <WaxAuthProvider net={{ endpoint, chainId, dApp }}>
      <App />
    </WaxAuthProvider>
  ),
  document.getElementById("root")
);
