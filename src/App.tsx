import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { APIManager } from './Services/APIManager/APIManager';

function App() {

  const [artworks, setArtworks] = useState();
  
  const onReturn = (artworks: []) => {
    console.log('ids', artworks)

  }

  useEffect(() => {
      APIManager.getDummyArtworks(onReturn)
  }, []);

  return (
    <div className="App">
      {!artworks && {
        // Show loader
      }}
      
    </div>
  );
}

export default App;
