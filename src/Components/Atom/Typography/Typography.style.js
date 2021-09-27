import styled, { css } from "styled-components";
import { fontSize, colors, device, fontFamily } from "../../styles/settings";

function Typography({ align }) {
  return css`
    margin-bottom: 0.35em;
    margin-top: 0;
    text-align: ${align};
    font-family: ${fontFamily};
  `;
}

function H1Style() {
  return css`
    ${fontSize("34px", "40px")};
    font-weight: 600;
    color: ${colors.h1};

    @media (${device.tablet}) {
      ${fontSize("24px", "26px")};
    }

    @media ${device.mobile} {
      ${fontSize("24px", "26px")};
    }
  `;
}

function H2Style() {
  return css`
    ${fontSize("24px", "26px")};
    font-weight: 600;
    color: ${colors.h2};
    margin-bottom: 1em;

    @media ${device.mobile} {
      ${fontSize("20px", "28px")};
    }
  `;
}

function H3Style() {
  return css`
    ${fontSize("20px", "28px")};
    font-weight: 500;
    color: ${colors.h3};

    @media ${device.mobile} {
      ${fontSize("18px", "26px")};
    }
  `;
}

function H4Style() {
  return css`
    ${fontSize("18px", "26px")};
    color: ${colors.h4};

    @media ${device.mobile} {
      ${fontSize("18px", "26px")};
    }
  `;
}

function H5Style() {
  return css`
    ${fontSize("18px", "26px")};
    color: ${colors.h5};

    @media ${device.tablet} {
      ${fontSize("18px", "24px")};
    }

    @media ${device.mobile} {
      ${fontSize("18px", "24px")};
    }
  `;
}

function H6Style() {
  return css`
    ${fontSize("16px", "22px")};
    color: ${colors.h6};

    @media ${device.mobile} {
      ${fontSize("16px", "22px")};
    }
  `;
}

function Body1Style() {
  return css`
    ${fontSize("16px", "22px")};
    color: ${colors.p};
    margin-bottom: 20px;

    @media ${device.mobile} {
      ${fontSize("14px", "20px")};
    }
  `;
}

function Body2Style() {
  return css`
    ${fontSize("14px", "20px")};
    color: ${colors.p};
    margin-bottom: 20px;

    @media ${device.mobile} {
      ${fontSize("14px", "20px")};
    }
  `;
}

function SpanStyle() {
  return css`
    ${fontSize("11px", "15px")};
    color: ${colors.p};
    margin-bottom: 0.35em;
    margin-top: 0;

    @media ${device.mobile} {
      ${fontSize("13px", "17px")};
    }
  `;
}

function SpanUpperCaseStyle({ marginBottom }) {
  return css`
    display: block;
    ${fontSize("14px", "14px")};
    color: ${colors.p};
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
    ${marginBottom && "margin-bottom: 20px"};

    @media ${device.mobile} {
      ${fontSize("13px", "17px")};
    }
  `;
}

export const H1Wrapper = styled.h1`
  ${Typography};
  ${H1Style};
`;
export const H2Wrapper = styled.h2`
  ${Typography};
  ${H2Style};
`;
export const H3Wrapper = styled.h3`
  ${Typography};
  ${H3Style};
`;
export const H4Wrapper = styled.h4`
  ${H4Style};
`;
export const H5Wrapper = styled.h5`
  ${H5Style};
`;
export const H6Wrapper = styled.h6`
  ${H6Style};
`;
export const Body1Wrapper = styled.p`
  ${Body1Style}
`;
export const Body2Wrapper = styled.p`
  ${Body2Style};
`;
export const SpanWrapper = styled.span`
  ${SpanStyle};
`;
export const SpanUpperCaseWrapper = styled.span`
  ${SpanUpperCaseStyle};
`;
