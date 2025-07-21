import React from "react";

const UserProfile = ({
  name = "Guest",
  role = "Visitor",
  yearsExperience,
  isActive = false,
}) => {
  return (
    <div style={{ border: "1px solid #eee", margin: "10px", padding: "10px" }}>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Role:</strong> {role}
      </p>
      {isActive && <p>Status: Active</p>}
      {!isActive && <p>Status: Inactive</p>}
      {yearsExperience !== undefined && (
        <p>Experience: {yearsExperience} years</p>
      )}
    </div>
  );
};

export default UserProfile;
