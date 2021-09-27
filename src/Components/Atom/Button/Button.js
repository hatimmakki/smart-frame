import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper, InputWrapper } from "./Button.style";
import ArrowRight from "../Icons/ArrowRight";

export const Button = ({
  children,
  color,
  size,
  variant,
  disabled,
  onClick,
  type,
  fullWidth,
  arrow,
  className,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  inputLabel,
  showArrow,
  noFullWidthMobile
}) => {
  return (
    <>
      {variant !== "input" ? (
        <ButtonWrapper
          color={variant === "button" ? color : null}
          size={size}
          variant={variant}
          onClick={onClick}
          disabled={disabled}
          type={type}
          fullWidth={fullWidth}
          className={className}
          marginRight={marginRight}
          marginLeft={marginLeft}
          marginBottom={marginBottom}
          marginTop={marginTop}
          noFullWidthMobile={noFullWidthMobile}
          data-testid="button"
        >
          {children}
          {((color === "primary" && arrow) || color === "secondary") &&
            size !== "sm" && <ArrowRight />}
        </ButtonWrapper>
      ) : (
        <InputWrapper
          marginRight={marginRight}
          marginLeft={marginLeft}
          marginTop={marginTop}
          className={className}
          data-testid="input"
        >
          <input type="reset" value={inputLabel} onClick={onClick} />
          {showArrow && <ArrowRight />}
        </InputWrapper>
      )}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary1", "tertiary2"]),
  variant: PropTypes.oneOf(["button", "link", "input"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  arrow: PropTypes.bool,
  className: PropTypes.string,
  marginRight: PropTypes.bool,
  marginLeft: PropTypes.bool,
  marginBottom: PropTypes.bool,
  marginTop: PropTypes.bool,
  inputLabel: PropTypes.string,
  showArrow: PropTypes.bool,
  noFullWidthMobile: PropTypes.bool
};

// Specifies the default values for props:
Button.defaultProps = {
  color: "primary",
  size: "md",
  variant: "button",
  fullWidth: false,
  arrow: true,
  showArrow: true,
  noFullWidthMobile: false
};
