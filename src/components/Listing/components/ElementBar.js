import React from "react";
import styled from "styled-components";

import { FlexContainer } from "components/Listing/components";

const Element = ({ children, ...props }) => (
  <FlexContainer {...props}>{children}</FlexContainer>
);

const StyledElement = styled(Element)``;

const Wrapper = styled(FlexContainer)`
  > ${StyledElement} {
    margin-${props => props.direction}: ${props => props.pixels}px;

    &:last-child {
      margin-${props => props.direction}: 0;
    }
  }
`;

const ElementBar = ({ children, ...props }) => {
  const { direction = "right", pixels = 8, ...restProps } = props;
  return (
    <Wrapper direction={direction} pixels={pixels} {...restProps}>
      {children}
    </Wrapper>
  );
};

export default ElementBar;

export { StyledElement };
