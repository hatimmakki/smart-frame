import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';

import './App.css';
import GalleryScreen from './Components/Organisms/GalleryScreen';
import NoArtworkView from './Components/Organisms/NoArtworkView';
import { APIManager } from './Services/APIManager/APIManager';

function App() {

  const [artworks, setArtworks] = useState([]);
  
  const onReturn = (artworksList: []) => {
    console.log(artworksList)
    //setArtworks(artworksList);


  }

  useEffect(() => {
      APIManager.getDummyArtworks(onReturn);
  }, []);

  return (
      <Row>
        <Col md={12} className="center">

          {artworks?.length > 0 ? (
            <GalleryScreen images={artworks}/>
          ) : (
            <NoArtworkView />
          )}

        </Col>
      </Row>
  );
}

export default App;
