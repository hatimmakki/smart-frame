import styled, { css } from "styled-components";
import { device, colors } from "../../styles/settings";

export function ButtonStyle({
  color,
  size,
  variant,
  fullWidth,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  noFullWidthMobile
}) {
  if (variant === "button") {
    return css`
      position: relative;
      border-style: solid;
      cursor: pointer;
      font-family: 'Roboto';
      background-color: ${props =>
        (color === "primary" && props.theme.secondary1) ||
        (color === "secondary" && colors.colorWhite) ||
        (color === "tertiary1" && "transparent") ||
        (color === "tertiary2" && colors.color2)};
      color: ${props =>
        (color === "primary" && colors.color1) ||
        (color === "secondary" && props.theme.primary) ||
        (color === "tertiary1" && colors.color2) ||
        (color === "tertiary2" && colors.colorWhite)};
      border-color: ${props =>
        (color === "primary" && props.theme.secondary1) ||
        (color === "secondary" && props.theme.primary) ||
        (color === "tertiary1" && colors.color2) ||
        (color === "tertiary2" && colors.color2)};
      padding: ${() =>
        (size === "sm" && "2px 20px") ||
        (size === "md" && "8px 30px") ||
        (size === "lg" && "11px 30px")};
      font-size: ${() =>
        (size === "sm" && "16px") ||
        (size === "md" && "16px") ||
        (size === "lg" && "20px")};
      line-height: ${() =>
        (size === "sm" && "20px") ||
        (size === "md" && "22px") ||
        (size === "lg" && "24px")};
      border-radius: ${() =>
        (size === "sm" && "13px") ||
        (size === "md" && "21px") ||
        (size === "lg" && "25px")};
      border-width: ${() =>
        (size === "sm" && "1px") ||
        (size === "md" && "2px") ||
        (size === "lg" && "2px")};
      ${fullWidth && "width: 100%"};
      ${marginRight && "margin-right: 17px"};
      ${marginLeft && "margin-left: 17px"};
      ${marginBottom && "margin-bottom: 20px"};
      ${marginTop && "margin-top: 20px"};
      transition: padding 0.2s;

      @media ${device.mobile} {
        padding: ${() =>
        (size === "sm" && "2px 15px") ||
        (size === "md" && "8px 20px") ||
        (size === "lg" && "11px 20px")};
      }

      &:hover {
        background-color: ${props =>
        (color === "primary" && colors.colorWhite) ||
        (color === "secondary" && props.theme.primary) ||
        (color === "tertiary1" && colors.color2) ||
        (color === "tertiary2" && colors.color3)};
        color: ${() =>
        (color === "primary" && colors.color1) ||
        (color === "secondary" && colors.colorWhite) ||
        (color === "tertiary1" && colors.colorWhite) ||
        (color === "tertiary2" && colors.colorWhite)};

        padding-left: ${() =>
        (size === "md" &&
          (color === "primary" || color === "secondary") &&
          "23px") ||
        (size === "lg" && "23px")};
        padding-right: ${() =>
        (size === "md" &&
          (color === "primary" || color === "secondary") &&
          "37px") ||
        (size === "lg" && "37px")};

        svg {
          right: 20px;
          opacity: 1;
          path {
            stroke: ${() => color === "secondary" && colors.colorWhite};
          }
        }
      }

      &:focus {
        outline: 0;
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: -6px;
          bottom: -6px;
          left: -6px;
          right: -6px;
          border: 2px solid ${colors.focusOutline};
          border-radius: ${() =>
        (size === "sm" && "18px") ||
        (size === "md" && "25px") ||
        (size === "lg" && "28px")};
        }
      }

      @media ${device.mobile} {
        ${!noFullWidthMobile && "width: 100%"};
      }

      svg {
        position: absolute;
        right: 17px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: right 0.15s;
      }
    `;
  } else {
    return css`
      color: ${colors.color2};
      text-decoration: underline;
      border: 0;
      background: transparent;
      padding: 0;
      cursor: pointer;
      margin-right: 20px;
      text-decoration: none;

      &:hover {
        color: ${colors.color6};

        svg {
          path {
            stroke: ${colors.color6};
          }
        }
      }

      svg {
        margin-left: 9px;
        vertical-align: middle;
      }
    `;
  }
}

function InputStyle({ marginRight, marginTop }) {
  return css`
    input {
      color: ${colors.color2};
      ${marginRight && "margin-right: 17px"};
      border: 0;
      background: transparent;
      padding: 0;
      cursor: pointer;
      ${marginTop && "margin-top: 20px"};

      &:hover {
        text-decoration: underline;
        color: ${colors.color6};
      }
    }

    &:hover {
      svg {
        path {
          stroke: ${colors.color6};
        }
      }
    }

    svg {
      margin-left: 9px;
      vertical-align: middle;
    }
  `;
}

function ButtonDisabled({ disabled }) {
  return css`
    opacity: ${disabled && 0.5};
    pointer-events: ${disabled && "none"};
  `;
}

export const ButtonWrapper = styled.button.attrs(props => props.type)`
  ${ButtonStyle};
  ${ButtonDisabled};
`;

export const InputWrapper = styled.span`
  ${InputStyle};
  ${ButtonDisabled};
`;
