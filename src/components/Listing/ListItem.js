import React from "react";
import Lozenge from "@atlaskit/lozenge";
import styled from "styled-components";
import Text from "@datashop/text";

import {
  FlexContainer,
  Element,
  ElementBar
} from "components/Listing/components";

const Container = styled(FlexContainer)`
  padding: 12px;
`;

const IconWrapper = styled.div``;

const defaultTitleText = "No title available.";
const defaultDescriptionText = "No description available.";

export const isObjectEmpty = obj =>
  typeof obj === "object" && Object.keys(obj).length === 0;

const NotAvailableText = styled(Text).attrs(props => {
  children: props.children;
})`
  margin-bottom: 3px;
  display: flex;
  flex-wrap: wrap;

  white-space: initial !important;
  color: ${props => props.notAvailable && `rgb(137, 147, 164);`};
`;

const TitleText = styled(NotAvailableText)``;
const DescriptionText = styled(NotAvailableText)``;

const TagsContainer = styled(ElementBar)`
  > ${Element} {
    margin-bottom: 4px;
  }
`;

const LozengeWrapper = styled.div`
  span {
    margin-top: 1px;
  }
`;

class ListItem extends React.PureComponent {
  render() {
    const {
      issueName,
      issueType = "unknown",
      title,
      description = "",
      status: { name: statusName },
      issue = {},
      storypoints,
      project,
      priority,
      sprint
    } = this.props;
    return (
      <Container>
        <IconWrapper style={{ margin: "2px 12px 0 0" }}>
          {!isObjectEmpty(issue) && issue.iconUrl && (
            <img src={issue.iconUrl} alt={issue.type} style={{ width: 20 }} />
          )}
        </IconWrapper>
        <FlexContainer column style={{ width: "90%" }}>
          <ElementBar alignItems='center' style={{ marginBottom: 3 }}>
            <Element>
              <Text fontWeight='bold'>{issueName}</Text>
            </Element>
            <Element title='Issue status'>
              <IconWrapper>
                <LozengeWrapper>
                  <Lozenge appearance='inprogress'>{statusName}</Lozenge>
                </LozengeWrapper>
              </IconWrapper>
            </Element>
            {storypoints !== null && (
              <Element title='Story Points'>
                <IconWrapper>
                  <LozengeWrapper>
                    <Lozenge>{storypoints}</Lozenge>
                  </LozengeWrapper>
                </IconWrapper>
              </Element>
            )}
          </ElementBar>
          <TitleText
            ellipsis
            notAvailable={!title}
            title={title}
            fontWeight='semiBold'
            style={{ marginBottom: 3 }}>
            {title || defaultTitleText}
          </TitleText>
          <DescriptionText notAvailable={!description}>
            {description || defaultDescriptionText}
          </DescriptionText>
          <TagsContainer alignItems='center' style={{ flexWrap: "wrap" }}>
            {sprint && (
              <Element>
                <LozengeWrapper>
                  <Lozenge appearance='new' title='Sprint'>
                    {sprint}
                  </Lozenge>
                </LozengeWrapper>
              </Element>
            )}
            {!isObjectEmpty(priority) && priority.name && (
              <Element title='Priority'>
                <FlexContainer alignItems='center'>
                  <img
                    src={priority.iconUrl}
                    style={{ width: 11, margin: "0 4px 0 0" }}
                  />
                  {priority.name}
                </FlexContainer>
              </Element>
            )}
            {!isObjectEmpty(project) && project.name && (
              <Element title='Project Name'>
                <IconWrapper>
                  <LozengeWrapper>
                    <Lozenge>
                      <FlexContainer alignItems='center'>
                        <img
                          src={project.avatarUrls["16x16"]}
                          style={{ width: 11, marginRight: 4 }}
                        />
                        {project.name}
                      </FlexContainer>
                    </Lozenge>
                  </LozengeWrapper>
                </IconWrapper>
              </Element>
            )}
          </TagsContainer>
        </FlexContainer>
      </Container>
    );
  }
}

export default ListItem;
