import style, { css } from "styled-components";

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
    transition: height 0.8s ease 0s;

    &.active {
      visibility: visible;
      opacity: 1;
      transition: visibility 0.4s, opacity 0.4qs linear;
    }

    &.focussed {
      height: 78%;
      transition: height 0.5s ease 0s;;

    }    

  }

  .visible {
    transition: bottom 0.4s ease 0s; 

    bottom: 0px !important;
  }

  .hidden {
    transition: bottom 0.4s ease 0s; 
    bottom: -400;
  }

  `;
}

export const GalleryScreenWrapperStyled = style.div`
    ${galleryScreenStyle};
`;
