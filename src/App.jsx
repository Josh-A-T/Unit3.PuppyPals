import { puppyList } from "./data.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            Tricks:
            <ul>
              {featuredPup.tricks.map((trick) => (
                <li key={trick.id}>{trick.title}</li>
              ))}
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
