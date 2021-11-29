import OpenModal from "./OpenModal";

function PackItem(props) {
  return (
    <div className="text-center bg-warmGray-800 rounded-lg relative group">
      <div className="bg-black/10 h-full w-full absolute rounded-lg hidden group-hover:block">
        <OpenModal {...props} />
      </div>

      <span className="absolute top-1 right-2 text-gray-300 font-bold">
        #{props.template_mint}
      </span>

      <img
        src={`https://ipfs.io/ipfs/${props.data.img}`}
        className="h-56 object-contain mx-auto"
      />

      <p className="text-gray-200 py-4">
        <strong className="font-black tracking-wide text-lg">
          {props.data.name}
        </strong>
        <br />
        <small>({props.asset_id})</small>
      </p>
    </div>
  );
}

export default PackItem;
