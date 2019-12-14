import React from "react";
import styled from "styled-components";
import List from "components/Listing/List";

const Wrapper = styled.div`
  margin: 8px;
`;

const Listing = props => (
  <Wrapper>
    <List {...props} />
  </Wrapper>
);

export default Listing;
