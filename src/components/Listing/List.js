import React, { PureComponent } from "react";
import styled from "styled-components";
import ListItem from "components/Listing/ListItem";
import Card from "@datashop/card";
import {
  ElementBar,
  Element,
  FlexContainer
} from "components/Listing/components";
import Loader from "components/Listing/Loader";
import axios from "axios";
import { isObjectEmpty } from "components/Listing/ListItem";
import Text from "@datashop/text";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import Heading from "@datashop/heading";

import ErrorIcon from "@atlaskit/icon/glyph/error";

const StyledCard = styled(Card)`
  width: 100%;
  background-color: white;
`;

const ItemWrapper = styled(Element)`
  cursor: pointer;
  ${({ disabled = false }) => `
    pointer-events: ${disabled ? "none" : "auto"};
    opacity: ${disabled ? "0.3" : "1"};
  `} : "")}
`;
const ListContainer = styled(ElementBar)`
  margin: 8px;
`;

export const EmptyPlaceholder = props => (
  <FlexContainer column alignItems='center' flexGrow={1} {...props}>
    {props.icon}
    {props.children(props)}
  </FlexContainer>
);

const ErrorPlaceholder = () => (
  <EmptyPlaceholder icon={<ErrorIcon size='xlarge' />}>
    {() => (
      <React.Fragment>
        <Text key={1}>{`We did not want you to see this 😢 `}</Text>
        <Text key={2}>{`Our best minds are working on fixing it.`}</Text>
        <Text key={3}>{`We will be back shortly.`}</Text>
      </React.Fragment>
    )}
  </EmptyPlaceholder>
);

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: {},
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true, error: {} });
    axios
      .get(`http://10.10.14.127:7070/innote/jira/past_issues`)
      .then(({ data: { data } }) => {
        this.setState({ list: data, loading: false });
      })
      .catch(({ response = {} }) => {
        this.setState({ error: response.data || {}, loading: false });
      });
  }

  handleCardItemClick = issueId => {
    this.props.history.push(`/details/${issueId}`);
  };

  render() {
    // return <Loader />;
    const { loading, list, error } = this.state;
    if (loading) {
      return <Loader />;
    }
    if (!isObjectEmpty(error)) {
      return (
        <ErrorPlaceholder
          column
          justifyContent='center'
          style={{ height: "80vh" }}
        />
      );
    }
    if (list.length === 0) {
      return <span>No recent activity</span>;
    }
    return (
      <ListContainer column direction='bottom' pixels={12}>
        {list.map((listItem, outerIndex) => {
          const { data, updatedOn } = listItem;
          const diff = differenceInDays(new Date(), new Date(updatedOn));
          const formattedDate =
            diff >= 1
              ? formatDistanceToNow(new Date(updatedOn), {
                  addSuffix: true
                })
              : "Today";
          return (
            <Element column key={outerIndex}>
              <Heading
                as='h2'
                style={{
                  marginBottom: 12,
                  textTransform: "capitalize",
                  fontSize: "24px",
                  lineHeight: "30px",
                  fontWeight: 600
                }}>
                {formattedDate}
              </Heading>
              <ElementBar column direction='bottom'>
                {data.map(dataItem => {
                  const { key, ...restProps } = dataItem;
                  return (
                    <ItemWrapper
                      key={key}
                      onClick={() => this.handleCardItemClick(restProps.id)}
                      disabled={!restProps.id}>
                      <StyledCard shadow='light'>
                        <ListItem issueName={key} {...restProps} />
                      </StyledCard>
                    </ItemWrapper>
                  );
                })}
              </ElementBar>
            </Element>
          );
        })}
      </ListContainer>
    );
  }
}

export default List;
