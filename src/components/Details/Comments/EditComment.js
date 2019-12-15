import React from "react";
import Textarea from "@datashop/textarea";
import Button from "@atlaskit/button";
import { FlexContainer } from "components/Listing/components";
import { CommentAction } from "@atlaskit/comment";
import styled from "styled-components";
import axios from "axios";

const ButtonWrapper = styled.div`
  margin-top: 8px;
`;

class EditComment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      value: ""
    };
  }

  enableEditMode = () => {
    this.setState({
      editMode: true,
      value: ""
    });
  };

  closeEditMode = () => {
    this.setState({
      editMode: false,
      value: ""
    });
  };

  handleInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ value });
  };

  render = () => {
    const { handleAddComment, ...rest } = this.props;
    const { editMode, value = "" } = this.state;
    return editMode ? (
      <FlexContainer column style={{ width: "80%" }} {...rest}>
        <Textarea
          placeholder='Name'
          value={value}
          onChange={this.handleInputChange}
        />
        <ButtonWrapper>
          <Button
            appearance='primary'
            onClick={() => {
              this.closeEditMode();
              handleAddComment(value);
            }}>
            Add Comment
          </Button>
        </ButtonWrapper>
      </FlexContainer>
    ) : (
      <Button onClick={this.enableEditMode}>Add</Button>
    );
  };
}

export default EditComment;
