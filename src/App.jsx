import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    const featuredPup = puppies.find((pup)=> pup.id === featPupId)
    {featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )}}

  return (
    <div className="App"  >{ featPupId && <p>{ featPupId }</p> }
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id)}}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
export default App;
