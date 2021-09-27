import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import { GalleryScreenWrapperStyled } from "./GalleryScreen.style";
import { deviceSize } from "../../styles/settings";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
/**
 * This gallery screen shows a full screen images gallery
 *  every image passed to this component must be in the following structure:
 *      {
 *         medium: String,
 *         metadataDate: String,
 *         objectBeginDate: Int,
 *         objectDate: String,
 *         objectEndDate: Int,
 *         objectID: Int,
 *         objectName: String,
 *         objectURL: String,
 *         objectWikidata_URL: String,
 *         period: String,
 *         portfolio: String,
 *         primaryImage: String,
 *         primaryImageSmall: String,
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
const GalleryScreen = ({
  images
}) => {

  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const listOfImages = () => images.map((img, index) => {
    const className = currentImageIndex === index ? 'media active' : 'media';

    return (
      <Image className={className} key={img?.objectID} src={img?.primaryImageSmall} />
    )
  });

  useEffect(() => {

    let interval = setInterval(() => {
      // runs every 10 second (10000ms)
      setCurrentImageIndex((t) => t >= images.length - 1 ? 0 : t + 1);
    }, 1000);

    return () => clearInterval(interval);

  }, [])


  return (
    <GalleryScreenWrapperStyled>
      {listOfImages()}

    </GalleryScreenWrapperStyled>
  );
};

GalleryScreen.propTypes = {
  images: PropTypes.array.isRequired
};

export default GalleryScreen;
