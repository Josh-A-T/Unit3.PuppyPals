import { catList } from "./data.js";
import { useState } from "react";
import "./stylesheet.css";

export default function App() {
  const [kitties, setKitties] = useState(catList);
  const [featCatId, setFeatCatId] = useState(null);

  const handleClick = (catId) => {
    setFeatCatId(catId);
  };
  const featuredCat = kitties.find((cat) => cat.id === featCatId);
  return (
    <div className="app-container">
      <div className="sidebar">
        {kitties.map((cat) => (
          <p onClick={() => handleClick(cat.id)} key={cat.id}>
            {cat.name}
          </p>
        ))}
      </div>

      <div className="main-content">
        {featCatId && featuredCat && (
          <div className="content-card">
            <h1>{featuredCat.name}</h1>
            <img
              src={featuredCat.image || "https://placehold.co/300"} // Default image
              alt={`${featuredCat.name}'s picture`}
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
    </div>
  );
}
