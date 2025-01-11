import React from "react";
import "./NetworkLayers.css";

const NetworkLayers = () => {
  const layers = [
    {
      title: "Layer 1",
      details: "Identify important troubleshooting and cybersecurity related information such as interface names, speed, state, and neighboring devices",
    },
    {
      title: "Layer 2",
      details: "Visualize your VLANs and the 802.1q trunk links that are configured to support them. View the true scale of your topology and the networks it supports",
    },
    {
      title: "Layer 3",
      details: "Get historical data for hostnames, IPs, and MAC address across your network. Invaluable information for tracking your topology changes.",
    },
  ];

  return (
    <div className=" section-container">
    <div className="card-grid">
      {layers.map((layer, index) => (
        <div className="card" key={index}>
          <h3>{layer.title}</h3>
          <p>{layer.details}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default NetworkLayers;
