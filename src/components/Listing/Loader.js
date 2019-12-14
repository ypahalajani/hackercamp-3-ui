import React from "react";
import Placeholder from "@datashop/placeholder";
import {
  FlexContainer,
  ElementBar,
  Element
} from "components/Listing/components";

const Loader = () => {
  return (
    <React.Fragment>
      <Placeholder>
        <ElementBar column direction='bottom' pixels='8'>
          <Element style={{ margin: 8 }}>
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
          </Element>
          <Element style={{ margin: 8 }}>
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
          </Element>
          <Element style={{ margin: 8 }}>
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
          </Element>
          <Element style={{ margin: 8 }}>
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
          </Element>
        </ElementBar>
      </Placeholder>
    </React.Fragment>
  );
};

export default Loader;
