import { createResource, For } from "solid-js";
import { fetchTemplateAssets } from "../../lib/assets";
import ListAsset from "./ListAsset";

function PackModalAssets(props) {
  const [tempassets] = createResource(props.templates, fetchTemplateAssets);

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-4">
        <For each={tempassets()} fallback={<p>Loading...</p>}>
          {(item) => <ListAsset {...item} />}
        </For>
      </div>
    </div>
  );
}

export default PackModalAssets;
