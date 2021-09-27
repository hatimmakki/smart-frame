import PropTypes from "prop-types";
import { ButtonBase } from "@material-ui/core";

import { InfoModalWrapperStyled } from "./InfoModal.style";
import { Body1, Body2, H1 } from "../../../Atom/Typography";
import { Container, Row, Col } from "react-grid-system";
import { CloseIcon } from "../../../Atom/Icons";


const InfoModal = ({ artwork, handleClose, visible }) => {

  return (
    <InfoModalWrapperStyled className={`${visible ? 'visible' : 'hidden'}`}>
      <Container fluid>
        <Row>
          <ButtonBase
            onClick={handleClose}
            className="close-button">
            <CloseIcon />
          </ButtonBase>
          <Col md={12}>
            {artwork?.department && <H1 className="department">{artwork?.department}</H1>}
          </Col>
          <Col md={10} push={{ md: 1 }}>
            {artwork?.title && <H1 className="color-white">{artwork?.title}</H1>}
            {artwork?.creditLine && <Body1 className="color-white">{artwork?.creditLine}</Body1>}
            {artwork?.medium && <Body1 className="color-white">({artwork?.medium})</Body1>}
            {artwork?.repository && <Body2 className="color-white">{artwork?.repository}</Body2>}
          </Col>
        </Row>
      </Container>
    </InfoModalWrapperStyled>
  );
};

InfoModal.propTypes = {
  artwork: PropTypes.object,
  handleClose: PropTypes.func,
  visible: PropTypes.bool
};

export default InfoModal;
