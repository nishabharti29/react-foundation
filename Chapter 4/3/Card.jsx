import React from "react";

const Card = ({ children, title }) => {
  return (
    <div
      style={{
        border: "1px solid blue",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
