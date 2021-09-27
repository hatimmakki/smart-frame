import { Button } from "../../Atom/Button";
import { H1 } from "../../Atom/Typography";
import { NoArtworkViewWrapperStyled } from "./NoArtworkView.style";

const GalleryScreen = () => {

  const onReload = () => {

  }

  return (
    <NoArtworkViewWrapperStyled>
      <H1>There are no artworks no display</H1>
      <Button onClick={onReload} >Reload</Button>
    </NoArtworkViewWrapperStyled>
  );
};

export default GalleryScreen;
