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
      <Placeholder>
        <ElementBar column direction='bottom' pixels='8'>
          {Array.from(new Array(5)).map((item, index) => (
            <Element key={index}>
              <Card shadow='light'>
                <FlexContainer>
                  <Placeholder.Image style={{ width: 24, height: 24 }} />
                  <FlexContainer column flexGrow={1}>
                    <Placeholder.Paragraph length='small' />
                    <Placeholder.Paragraph length='medium' />
                    <Placeholder.Paragraph length='large' />
                    <ElementBar flexGrow={1}>
                      <Element style={{ width: "16%" }}>
                        <Placeholder.Paragraph length='large' />
                      </Element>
                      <Element style={{ width: "16%" }}>
                        <Placeholder.Paragraph length='large' />
                      </Element>
                      <Element style={{ width: "16%" }}>
                        <Placeholder.Paragraph length='large' />
                      </Element>
                      <Element style={{ width: "16%" }}>
                        <Placeholder.Paragraph length='large' />
                      </Element>
                    </ElementBar>
                  </FlexContainer>
                </FlexContainer>
              </Card>
            </Element>
          ))}
        </ElementBar>
      </Placeholder>
    </React.Fragment>
  );
};

export default Loader;
