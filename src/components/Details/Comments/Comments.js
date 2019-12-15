import React from "react";
import styled from "styled-components";
import axios from "axios";

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

const mockedResponse = {
  data: [
    {
      author: {
        displayName: "Saniya Sharma",
        emailAddress: "saniya.sharma@innovaccer.com",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/0cd7208d55e6b3aec057fd8d67a8486b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png&size=48&s=48",
          "24x24":
            "https://secure.gravatar.com/avatar/0cd7208d55e6b3aec057fd8d67a8486b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png&size=24&s=24",
          "16x16":
            "https://secure.gravatar.com/avatar/0cd7208d55e6b3aec057fd8d67a8486b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png&size=16&s=16",
          "32x32":
            "https://secure.gravatar.com/avatar/0cd7208d55e6b3aec057fd8d67a8486b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png&size=32&s=32"
        }
      },
      commentBody: "This needs your attention\r\ncc",
      created: "2019-12-14T20:21:23.270+0530",
      updated: "2019-12-14T20:21:23.270+0530"
    },
    {
      author: {
        displayName: "Saniya Sharma",
        emailAddress: "saniya.sharma@innovaccer.com",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/0cd7208d55e6b3aec057fd8d67a8486b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png&size=48&s=48",
          "24x24":
            "https://secure.gravatar.com/avatar/0cd7208d55e6b3aec057fd8d67a8486b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png&size=24&s=24",
          "16x16":
            "https://secure.gravatar.com/avatar/0cd7208d55e6b3aec057fd8d67a8486b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png&size=16&s=16",
          "32x32":
            "https://secure.gravatar.com/avatar/0cd7208d55e6b3aec057fd8d67a8486b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSS-0.png&size=32&s=32"
        }
      },
      commentBody: "This needs your attention\n\ncc",
      created: "2019-12-14T20:28:19.196+0530",
      updated: "2019-12-14T20:28:19.196+0530"
    },
    {
      author: {
        displayName: "Rajat Goyal",
        emailAddress: "rajat.goyal@innovaccer.com",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/db613b5c31370ad06cad3a16fd0bf512?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRG-1.png&size=48&s=48",
          "24x24":
            "https://secure.gravatar.com/avatar/db613b5c31370ad06cad3a16fd0bf512?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRG-1.png&size=24&s=24",
          "16x16":
            "https://secure.gravatar.com/avatar/db613b5c31370ad06cad3a16fd0bf512?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRG-1.png&size=16&s=16",
          "32x32":
            "https://secure.gravatar.com/avatar/db613b5c31370ad06cad3a16fd0bf512?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRG-1.png&size=32&s=32"
        }
      },
      commentBody: "needs ur attention\n\n\n\nPlease proceed as per will",
      created: "2019-12-15T08:11:34.556+0530",
      updated: "2019-12-15T08:13:41.999+0530"
    }
  ]
};

class Comments extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      list: mockedResponse.data,
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
    // TODO: make API call and fetch comments
  }
  render() {
    const { list } = this.state;
    const issueId = this.props.data.id;
    return (
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
