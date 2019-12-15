import React from "react";
import styled from "styled-components";
import axios from "axios";
import Loader from "./Loader";
import Text from "@datashop/text";
import MediaServicesAddCommentIcon from "@atlaskit/icon/glyph/media-services/add-comment";
import {
  FlexContainer,
  Element,
  ElementBar
} from "components/Listing/components";
import Comment from "./Comment";
import EditComment from "./EditComment";
import { EmptyPlaceholder } from "components/Listing/List";

const Wrapper = styled(ElementBar)`
  padding: 16px;
`;

const CommentWrapper = styled(Element)``;

const NoCommentsPlaceholder = props => (
  <EmptyPlaceholder
    style={{ marginTop: 250 }}
    icon={<MediaServicesAddCommentIcon size='xlarge' />}>
    {() => (
      <React.Fragment>
        <Text style={{ marginTop: 8 }} fontWeight='bold' fontSize='large'>
          No comments for this Ticket.
        </Text>
        <Text style={{ marginTop: 8 }}>
          You can click add to add a comment.
        </Text>
        <div style={{ marginTop: 12 }}>
          <EditComment
            handleAddComment={text =>
              this.handleAddComment(props.issueId, {
                body: text
              })
            }
          />
        </div>
      </React.Fragment>
    )}
  </EmptyPlaceholder>
);

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
    return (
      <React.Fragment>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {list.length === 0 ? (
              <NoCommentsPlaceholder issueId={issueId} />
            ) : (
              <Wrapper column direction='bottom'>
                <React.Fragment>
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
                </React.Fragment>
              </Wrapper>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Comments;
