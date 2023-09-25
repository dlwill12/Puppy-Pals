import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";
import "./index.css";

// React functional componet
function App() {
  //invoke the 'useState' HOOK to INITIALIZE two 'state' variables: => puppies &&  => featPupId.
  //useState returns an array
  const [puppies, setPuppies] = useState(puppyList);
  // puppies represent the puppy
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // pupid onclick
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}

        {/* if featPupId in not null render */}
        {featPupId && (
          <div className="idInfo">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
{
  /* <button onClick={() => setFeatPupId(null)}>Back to List</button> */
}
