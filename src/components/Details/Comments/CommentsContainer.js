import React, { Component } from 'react';

import Comments from './Comments';

class CommentsContainer extends Component {
	render() {
		return <Comments {...this.props} />;
	}
}

export default CommentsContainer;
