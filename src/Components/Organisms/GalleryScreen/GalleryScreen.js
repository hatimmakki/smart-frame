import PropTypes from "prop-types";
import { useTimer } from 'use-timer';
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import { GalleryScreenWrapperStyled } from "./GalleryScreen.style";
import InfoModal from "./InfoModal";
/**
 * This gallery screen shows a full screen images gallery
 *  every image passed to this component must be in the following structure:
 *      {
 *         medium: String,
 *         metadataDate: String,
 *         objectBeginDate: Int,
 *         objectDate: String,
 *         objectEndDate: Int,
 *         objectID: Int,   // Required
 *         objectName: String,
 *         objectURL: String,
 *         objectWikidata_URL: String,
 *         period: String,
 *         portfolio: String,
 *         primaryImage: String,
 *         primaryImageSmall: String,   // Required
 *         region: String,
 *         reign: String,
 *         repository: String,
 *         rightsAndReproduction: String,
 *         river: String,
 *         state: String,
 *         subregion: String,
 *         title: String
 *      }
 * @param {*} images List of images to display in the smart frame 
 */
const GalleryScreen = ({ images }) => {


  // PROPERTIES

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const { start, pause } = useTimer({
    onTimeUpdate: (time) => {
      if (time % 10 == 0 && time !== 0) {
        // every 10 seconds
        setCurrentImageIndex((t) => t >= images.length - 1 ? 0 : t + 1);
      }
    },
  });

  // FUNCTIONS

  const handleImageClick = (e) => {
    // pause the timer
    pause();


    const id = e.target.id;
    const imageObject = images.find(image => {
      return image.objectID == id;
    });
    if (!!imageObject) {
      setCurrentImage(imageObject)
      showInfo(imageObject);
    }
  }

  const showInfo = (image) => {
    setShowInfoModal(true);
    setCurrentImage(image);
  }

  const handleCloseModal = () => {
    setShowInfoModal(false);

    // resume the timer
    start();
  }

  const listOfImages = images.map((img, index) => {
    const className = currentImageIndex === index ? 'media active' : 'media';
    return (
      <Image
        onClick={handleImageClick}
        className={className}
        key={img?.objectID}
        id={img?.objectID}
        src={img?.primaryImageSmall} />
    )
  });

  useEffect(() => {

    // Start the timer
    start();

  }, [])


  return (
    <GalleryScreenWrapperStyled>
      {listOfImages}
      <InfoModal visible={showInfoModal} artwork={currentImage} handleClose={handleCloseModal} />
    </GalleryScreenWrapperStyled>
  );
};

GalleryScreen.propTypes = {
  images: PropTypes.array.isRequired
};

export default GalleryScreen;
