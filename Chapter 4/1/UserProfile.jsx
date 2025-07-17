import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid #eee', margin: '10px', padding: '10px' }}>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Role:</strong> {props.role}
      </p>
    </div>
  );
};

export default UserProfile;
