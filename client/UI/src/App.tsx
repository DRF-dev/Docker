import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [name, setName] = useState<string>()
  const [prenom, setPrenom] = useState<string>()
  
  async function onSubmit() {
    try {
      await Axios.post("http://localhost:3010/", { name, prenom })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form method="post" onSubmit={(e)=> { e.preventDefault(); onSubmit() }}>
          <input type="text" name="name" placeholder="name" onChange={e => setName(e.target.value)}/>
          <input type="text" name="prenom" placeholder="prenom" onChange={e => setPrenom(e.target.value)}/>
          <button type="submit">Envoyer</button>
        </form>
      </header>
    </div>
  );
}

export default App;
