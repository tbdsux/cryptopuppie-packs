function ListAsset(props) {
  return (
    <div>
      <img
        src={`https://ipfs.io/ipfs/${props.immutable_data.img}`}
        className="h-full"
      />
    </div>
  );
}

export default ListAsset;
