import React from "react";

function SharedInput({ label, value, onValueChange }) {
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <div>
      <label>{label}: </label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default SharedInput;
