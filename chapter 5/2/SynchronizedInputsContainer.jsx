import React, { useState } from "react";
import SharedInput from "./SharedInput";

function SynchronizedInputsContainer() {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (newValue) => {
    setTextValue(newValue);
  };

  return (
    <div>
      <h2>Synchronized Inputs</h2>
      <p>Type in either box:</p>
      <SharedInput
        label="Input 1"
        value={textValue}
        onValueChange={handleTextChange}
      />
      <SharedInput
        label="Input 2"
        value={textValue}
        onValueChange={handleTextChange}
      />
      <p>Current Value: {textValue}</p>
    </div>
  );
}

export default SynchronizedInputsContainer;
