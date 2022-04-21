import { useLayer } from "@purphoros/react-layers";

const Modal = (props: any) => {
  const { orientation, layerUuid, updatedOn } = props;
  const { createLayer, closeLayerByUuid } = useLayer();

console.log("props", props);

  const onClick = (orientation = "default") => {
    createLayer({
      orientation,
      component: <Modal orientation={orientation} />
    });
  }

  return <div style={{ width: orientation === "modal" ? "400px" : "100%", padding: "12px", position: "relative", backgroundColor: "#FFF" }}>
    <div>HERE {updatedOn}</div>
    <button onClick={() => onClick("default")}>New</button>
    <button onClick={() => closeLayerByUuid(layerUuid)}>Close</button>
    {[...Array(100).keys()].map((i) => <div key={i}>{i}</div>)}
  </div>
}

export default Modal;