import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';

import './App.css';
import Loader from './Components/Atom/Loader';
import GalleryScreen from './Components/Organisms/GalleryScreen';
import NoArtworkView from './Components/Organisms/NoArtworkView';
import { APIManager } from './Services/APIManager/APIManager';

function App() {

  /////// PROPERTIES

  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);


  /////// UseEffects

  useEffect(() => {
      setLoading(true);
      laodImages();

  }, []);

  const laodImages = () => {
    APIManager.getRandomArtworks(10, onReturnedArtworks);
  }


  /////// CALLBACKS

  const onReloadClicked = () => {
    laodImages();
  }

  const onReturnedArtworks = (artworksList: []) => {
    setArtworks(artworksList);
    setLoading(false);
  }

  
  return (
      <Row>
        <Col md={12} className="center">

        {artworks?.length === 0 && !loading && (
          <NoArtworkView onReloadClicked={onReloadClicked} />
        )}
      {loading && (
        <Loader />
      )}
      {artworks?.length > 0 && !loading && (
        <GalleryScreen images={artworks}/>
      )}


        </Col>
      </Row>
  );
}

export default App;
