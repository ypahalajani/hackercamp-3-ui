import React from "react";
import styled from "styled-components";
import axios from "axios";
import Loader from "./Loader";
import Text from "@datashop/text";

import {
  FlexContainer,
  Element,
  ElementBar
} from "components/Listing/components";
import Comment from "./Comment";
import EditComment from "./EditComment";

const Wrapper = styled(ElementBar)`
  padding: 16px;
`;

const CommentWrapper = styled(Element)``;

class Comments extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      list: [],
      error: {}
    };

    this.handleAddComment.bind(this);
  }

  handleAddComment = (issueId, requestBody) => {
    axios
      .post(
        `http://10.10.14.127:7070/innote/jira/issues/${issueId}/comment`,
        requestBody
      )
      .then(({ data: { data } }) =>
        this.setState(prevState => {
          return {
            ...prevState,
            list: [...prevState.list, data]
          };
        })
      )
      // TODO: Handle comment submission failure
      .catch(({ response: { data } }) => console.log(data));
  };
  componentDidMount() {
    const issueId = this.props.data.id;
    if (issueId) {
      this.setState({
        loading: true
      });
      axios
        .get(`http://10.10.14.127:7070/innote/jira/issues/${issueId}/comments`)
        .then(({ data: { data: list } }) =>
          this.setState(prevState => ({
            list,
            loading: false
          }))
        )
        .catch(() => {
          this.setState(prevState => ({
            loading: false
          }));
        });
    }
  }
  render() {
    const { list, loading } = this.state;
    const issueId = this.props.data.id;
    return loading ? (
      <Loader />
    ) : list.length === 0 ? (
      <Text>No comments available.</Text>
    ) : (
      <Wrapper column direction='bottom'>
        {list.map((item, index) => (
          <CommentWrapper key={index}>
            <Comment
              {...item}
              handleAddComment={() => {
                this.handleAddComment(issueId);
              }}
            />
          </CommentWrapper>
        ))}
        <div style={{ marginLeft: 46 }}>
          <EditComment
            handleAddComment={text =>
              this.handleAddComment(issueId, {
                body: text
              })
            }
          />
        </div>
      </Wrapper>
    );
  }
}

export default Comments;
