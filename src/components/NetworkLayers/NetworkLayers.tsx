import React from "react";
import "./NetworkLayers.css";

const NetworkLayers = () => {
  const layers = [
    {
      title: "Layer 1",
      details: ["Network port names", "Speed", "State", "Neighbors"],
    },
    {
      title: "Layer 2",
      details: ["VLANs", "802.1q trunk links"],
    },
    {
      title: "Layer 3",
      details: ["Hostname", "IPs", "ARP"],
    },
  ];

  return (
    <div className=" section-container">
    <div className="card-grid">
      {layers.map((layer, index) => (
        <div className="card" key={index}>
          <h3>{layer.title}</h3>
          <ul>
            {layer.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default NetworkLayers;
