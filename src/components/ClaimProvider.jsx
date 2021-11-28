import {
  createContext,
  createEffect,
  createResource,
  createSignal,
  useContext,
} from "solid-js";
import { fetchClaimAssets } from "../lib/assets";

const ClaimContext = createContext();

function ClaimProvider(props) {
  const [assets] = createResource(props.asset_id, fetchClaimAssets);
  const [templates, setTemplates] = createSignal("");
  const [claimed, setClaimed] = createSignal(false);

  createEffect(() => {
    if (assets.loading) return;

    const temps = assets().map((r) => r.template_id);

    setTemplates(temps.join(","));
  });

  return (
    <ClaimContext.Provider
      value={{ claimed, setClaimed, templates, assets, props }}
    >
      {props.children}
    </ClaimContext.Provider>
  );
}

const useClaim = () => {
  const context = useContext(ClaimContext);
  if (context === undefined) throw new Error("<ClaimProvider></ClaimProvider>");

  return context;
};

export default ClaimProvider;
export { useClaim };
