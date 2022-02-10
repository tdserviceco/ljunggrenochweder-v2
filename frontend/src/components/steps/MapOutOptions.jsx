import React from "react";

const MapOutOptions = (options) => {
  return options.map((option, key) => {
    return <option key={key} value={option.id}>{option.attributes.name}</option>;
  })
};

export default MapOutOptions;