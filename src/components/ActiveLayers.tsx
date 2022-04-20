import React, { cloneElement } from 'react';
// import React, { useReducer, cloneElement } from 'react';

// import { useEffect } from 'react';
import { Layer } from './Context';

interface Props {
  layers: any
  closeLayerByUuid: (layerUuid: string) => void
}

// const getActive = (items: any) => items
//   .filter((d: any) => !!d.status)
//   .sort((a: any, b: any) => a.updatedOn > b.updatedOn ? 1 : a === b ? 0 : -1);

// const reducer = (existing: any, layers: any) => {
//   if (layers?.length !== existing?.length) {
//     return layers;
//   }
//   return existing;
// }

const ActiveLayers = (props: Props) => {
  const { layers, closeLayerByUuid } = props;

  // const [ activeLayers = [], dispatch ] = useReducer(reducer, getActive(layers));
  // useEffect(() => {
  //   dispatch(getActive(layers));
  // }, [ layers ]);


  const alignments: { [k: string]: any } = {
    modal: {
      alignItems: "center", justifyContent: "center"
    },
    default: {

    },
    bottom: {
      justifyContent: "flex-end"
    }
  }

  return <React.Fragment>
    {layers.map((layer: Layer) => {
      const { layerUuid, children, orientation = "modal" } = layer;
      const custom = (orientation && alignments[orientation]) ? alignments[orientation] : alignments.default;
      return <div key={layerUuid} style={{ ...custom, display: "flex", flexDirection: "column", position: "absolute", top: "0px", right: "0px", bottom: "0px", left: "0px", backgroundColor: "transparent" }}>
        <div style={{ position: "absolute", top: "0px", right: "0px", bottom: "0px", left: "0px", backgroundColor: "black", opacity: "0.5" }} onClick={() => layerUuid && closeLayerByUuid(layerUuid)} />
        {cloneElement(children, { ...children.props, style: { ...children.props.style, backgroundColor: "#FF0000", position: "relative" }, ...layer })}
      </div>
    })}
  </React.Fragment>
}

export default ActiveLayers;