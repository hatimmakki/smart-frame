import style, { css } from "styled-components";

function InfoModalStyle() {
  return css`

  height: fit-content;
  width: 100vw;
  background: black;
  z-index: 10;
  position: fixed;
  margin: 0;
  padding: 21px;
  bottom: -800px;
  color: white;

  .color-white {
    color: white;
  }
  
  .close-button {
    position: absolute;
    top: -50px;
    left: calc(50% - 31px);
  }

  h1 {
    &.department {
      position: absolute;
      top: -70px;
      color: black;
    }
  }

  `;
}

export const InfoModalWrapperStyled = style.div`
    ${InfoModalStyle};
`;
