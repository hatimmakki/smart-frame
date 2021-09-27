import style, { css } from "styled-components";
import { fontSize, colors, device } from "../../styles/settings";

function galleryScreenStyle() {
  return css`
  width: 100vw;
  display: inline-flex
  justify-content: center;
  
  width: 100vw;
  img {
    position: fixed; 
    top: 0; 
    height: 100%;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.4s, opacity 0.4s linear;

    &.active {
      visibility: visible;
      opacity: 1;
      transition: visibility 0.4s, opacity 0.4qs linear;

    }
  }


  `;
}

export const GalleryScreenWrapperStyled = style.div`
    ${galleryScreenStyle};
`;
