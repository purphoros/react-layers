import { Layer, useLayer } from '@purphoros/react-layers';
import './App.css';

// import Modal from './components/Modal';

function App() {
  const { createLayer, closeLayerByUuid } = useLayer();

  const Modal = ({ layerUuid }: Layer) => <div style={{ position: "relative", width: "400px", padding: "12px", backgroundColor: "#FFF" }}>
    <div>Modal</div>
    <button onClick={() => closeLayerByUuid(layerUuid)}>Close</button>
  </div>

  const onClick = (orientation = "default") => {
    createLayer({
      orientation,
      component: <Modal />
    });
  }

  return (<div className="App">
    <header className="App-header">
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={() => onClick("bottom")}>Bottom Menu</button>
          <button onClick={() => onClick("modal")}>Modal</button>
          <button onClick={() => onClick("default")}>Default</button>
        </div>
        {[...Array(100).keys()].map((i) => <div key={i}>{i}</div>)}
      </div>
    </header>
  </div>);
}

export default App;
