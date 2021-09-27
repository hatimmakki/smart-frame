import React from "react";
import PropTypes from "prop-types";
import {
  H1Wrapper,
  H2Wrapper,
  H3Wrapper,
  H4Wrapper,
  H5Wrapper,
  H6Wrapper,
  Body1Wrapper,
  Body2Wrapper,
  SpanWrapper,
  SpanUpperCaseWrapper
} from "./Typography.style";

const propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
  marginBottom: PropTypes.bool
};

export const H1 = ({ children, align, className }) => {
  return (
    <H1Wrapper className={className} align={align}>
      {children}
    </H1Wrapper>
  );
};

export const H2 = ({ children, align, className }) => {
  return (
    <H2Wrapper className={className} align={align}>
      {children}
    </H2Wrapper>
  );
};

export const H3 = ({ children, align, className }) => {
  return (
    <H3Wrapper className={className} align={align}>
      {children}
    </H3Wrapper>
  );
};

export const H4 = ({ children, align, className }) => {
  return (
    <H4Wrapper className={className} align={align}>
      {children}
    </H4Wrapper>
  );
};

export const H5 = ({ children, align, className }) => {
  return (
    <H5Wrapper className={className} align={align}>
      {children}
    </H5Wrapper>
  );
};

export const H6 = ({ children, align, className }) => {
  return (
    <H6Wrapper className={className} align={align}>
      {children}
    </H6Wrapper>
  );
};

export const Body1 = ({ children, align, className }) => {
  return (
    <Body1Wrapper className={className} align={align}>
      {children}
    </Body1Wrapper>
  );
};

export const Body2 = ({ children, align, className }) => {
  return (
    <Body2Wrapper className={className} align={align}>
      {children}
    </Body2Wrapper>
  );
};

export const Span = ({ children, align, className }) => {
  return (
    <SpanWrapper className={className} align={align}>
      {children}
    </SpanWrapper>
  );
};

export const SpanUppercase = ({ children, align, className, marginBottom }) => {
  return (
    <SpanUpperCaseWrapper
      className={className}
      align={align}
      marginBottom={marginBottom}
    >
      {children}
    </SpanUpperCaseWrapper>
  );
};

H1.propTypes = propTypes;
H2.propTypes = propTypes;
H3.propTypes = propTypes;
H4.propTypes = propTypes;
H5.propTypes = propTypes;
H6.propTypes = propTypes;
Body1.propTypes = propTypes;
Body2.propTypes = propTypes;
Span.propTypes = propTypes;
SpanUppercase.propTypes = propTypes;
