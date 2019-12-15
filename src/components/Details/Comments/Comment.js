import React from "react";
import Avatar from "@atlaskit/avatar";
import Comment, {
  CommentAuthor,
  CommentTime,
  CommentAction,
  CommentEdited
} from "@atlaskit/comment";
import Text from "@datashop/text";
import { format } from "date-fns";

import {
  FlexContainer,
  Element,
  ElementBar
} from "components/Listing/components";
import { isObjectEmpty } from "components/Listing/ListItem";

class CommentItem extends React.PureComponent {
  render() {
    const { author, commentBody, created, updated } = this.props;
    return (
      <FlexContainer column style={{ flexGrow: 1 }}>
        {!isObjectEmpty(author) && (
          <React.Fragment>
            <Comment
              avatar={
                <Avatar
                  src={author.avatarUrls["16x16"]}
                  label={author.displayName}
                  size='medium'
                />
              }
              author={<CommentAuthor>{author.displayName}</CommentAuthor>}
              time={
                <CommentTime>{format(new Date(created), "PP")}</CommentTime>
              }
              content={<p>{commentBody}</p>}
              actions={[]}
            />
            <ElementBar
              column
              style={{ marginLeft: 46, width: "80%" }}
              direction='bottom'
              pixels={6}
              separator>
              <Element>
                {"updated" in this.props && (
                  <React.Fragment>
                    <CommentEdited>{`Last updated on ${format(
                      new Date(updated),
                      "PP"
                    )}`}</CommentEdited>
                  </React.Fragment>
                )}
              </Element>
            </ElementBar>
          </React.Fragment>
        )}
      </FlexContainer>
    );
  }
}

export default CommentItem;
