import React from "react";
import styled from "styled-components";
import List from "components/Listing/List";

const Wrapper = styled.div`
  padding: 16px 12px;
  background-color: rgb(235, 236, 240);
  height: 100vh;
  overflow: auto;
`;

const Listing = props => (
  <Wrapper>
    <List {...props} />
  </Wrapper>
);

export default Listing;
