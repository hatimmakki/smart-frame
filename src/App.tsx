import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';

import './App.css';
import GalleryScreen from './Components/Organisms/GalleryScreen';
import NoArtworkView from './Components/Organisms/NoArtworkView';
import { APIManager } from './Services/APIManager/APIManager';

function App() {

  /////// PROPERTIES

  const [artworks, setArtworks] = useState([]);
  

  /////// UseEffects

  useEffect(() => {
      //APIManager.getDummyArtworks(onReturnedArtworks);
      APIManager.getRandomArtworks(10, onReturnedArtworks);

  }, []);


  /////// CALLBACKS

  const onReloadClicked = () => {

  }

  const onReturnedArtworks = (artworksList: []) => {
    console.log(artworksList)
    setArtworks(artworksList);

  }

  
  return (
      <Row>
        <Col md={12} className="center">

          {artworks?.length > 0 ? (
            <GalleryScreen images={artworks}/>
          ) : (
            <NoArtworkView onReloadClicked={onReloadClicked} />
          )}

        </Col>
      </Row>
  );
}

export default App;
