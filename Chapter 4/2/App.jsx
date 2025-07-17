import React from 'react';
import UserProfile from './UserProfile.jsx';
import './App.css';

function App() {
  const userData1 = {
    id: 1,
    username: 'Alice',
    job: 'Developer',
  };
  const userData2 = {
    id: 2,
    username: 'Bob',
    job: 'Designer',
  };

  return (
    <div className="App">
      <h1>Company Directory</h1>

      <UserProfile name={userData1.username} role={userData1.job} />

      <UserProfile name={userData2.username} role={userData2.job} />

      <UserProfile name="Charlie" role="Manager" />

      <UserProfile name="Dana" role="Intern" yearsExperience={0.5} isActive={true} />
    </div>
  );
}

export default App;
