import { Portal } from "solid-js/web";
import ClaimProvider from "../../components/ClaimProvider";
import PackModalContainer from "./PackModalContainer";

function PackModal(props) {
  return (
    <Portal>
      <ClaimProvider {...props}>
        <div className="fixed w-full h-full bg-black/60 z-50 inset-0 flex items-center justify-center overflow-auto">
          <PackModalContainer />
        </div>
      </ClaimProvider>
    </Portal>
  );
}

export default PackModal;
