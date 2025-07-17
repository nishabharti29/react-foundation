const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Role:</strong> {props.role}</p>
      {props.isActive && <p>Status: Active</p>}
      {props.yearsExperience !== undefined && <p>Experience: {props.yearsExperience} years</p>}
    </div>
  );
};
export default UserProfile;