import React from "react";
import UserProfile from "./UserProfile.jsx";
import Card from "./Card.jsx"; // Import Card
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>Using Cards</h1>
      <Card title="User Info">
        <UserProfile name="Frank" role="Engineer" isActive={true} />
        <p>This user profile is inside a Card component.</p>
      </Card>
      <Card title="Another Section">
        <p>This is some plain text content inside another card.</p>
        <button>Click Me</button>
      </Card>
      <Card>
        {" "}
        <em>Content without a title prop.</em>
      </Card>
    </div>
  );
}
export default App;
