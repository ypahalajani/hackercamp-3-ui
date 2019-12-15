import React from "react";
import styled from "styled-components";
import Placeholder from "@datashop/placeholder";
import { default as DatashopCard } from "@datashop/card";
import {
  FlexContainer,
  ElementBar,
  Element
} from "components/Listing/components";

const Card = styled(DatashopCard)`
  padding: 8px;
  background-color: white;
  flex-grow: 1;
`;

const Loader = () => {
  return (
    <React.Fragment>
      <Placeholder style={{ padding: 16 }}>
        <ElementBar column direction='bottom' pixels='8'>
          {Array.from(new Array(3)).map((item, index) => (
            <Element key={index}>
              <Placeholder.Image
                round
                style={{ width: "36px", height: "36px" }}
              />
              <FlexContainer column flexGrow={1}>
                <Placeholder.Paragraph length='small' />
                <Placeholder.Paragraph length='large' />
                <Placeholder.Paragraph length='medium' />
              </FlexContainer>
            </Element>
          ))}
        </ElementBar>
      </Placeholder>
    </React.Fragment>
  );
};

export default Loader;
