import style, { css } from "styled-components";

function NoArtworkViewStyle() {
  return css`
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  `;
}

export const NoArtworkViewWrapperStyled = style.div`
    ${NoArtworkViewStyle};
`;
