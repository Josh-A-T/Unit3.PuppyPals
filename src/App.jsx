import { catList } from "./data.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [kitties, setKitties] = useState(catList);
  const [featCatId, setFeatCatId] = useState(null);

  const handleClick = (catId) => {
    setFeatCatId(catId);
  };
  const featuredCat = kitties.find((cat) => cat.id === featCatId);
  return (
    <div className="App">
      {kitties.map((cat) => (
        <p onClick={() => handleClick(cat.id)} key={cat.id}>
          {cat.name}
        </p>
      ))}
      {featCatId && featuredCat && (
        <div>
          <h1>{featuredCat.name}</h1>
          <img
            src={featuredCat.image || "https://placehold.co/150"} // Default image
            alt={`${featuredCat.name}'s picture`}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <ul>
            <li>Age: {featuredCat.age}</li>
            <li>Email: {featuredCat.email}</li>
            Tricks:
            <ul>
              {featuredCat.tricks.map((trick) => (
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
