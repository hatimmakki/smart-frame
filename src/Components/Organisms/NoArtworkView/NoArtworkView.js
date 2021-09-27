import PropTypes from "prop-types";

import { Button } from "../../Atom/Button";
import { H1 } from "../../Atom/Typography";
import { NoArtworkViewWrapperStyled } from "./NoArtworkView.style";

const GalleryScreen = ({ onReloadClicked }) => {

  return (
    <NoArtworkViewWrapperStyled>
      <H1>There are no artworks no display</H1>
      <Button onClick={onReloadClicked} >Reload</Button>
    </NoArtworkViewWrapperStyled>
  );
};

Button.propTypes = {
  onReloadClicked: PropTypes.func
};

export default GalleryScreen;
