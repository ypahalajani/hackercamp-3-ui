import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  ${({ column }) => (column ? "flex-direction: column;" : "")}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ""}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : "")}
  ${({ flexGrow }) => (flexGrow ? `flex-grow: ${flexGrow};` : "")}
`;

export default FlexContainer;
