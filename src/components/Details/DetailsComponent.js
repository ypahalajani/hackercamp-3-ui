import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import DetailsHeader from './DetailsHeader';
import DetailsBody from './DetailsBody';

class DetailsComponent extends Component {
	state = {
		selectedTab: 'Insights',
		isLoading: true,
		data: null,
		redirectToHome: false
	};

	getData(issueId) {
		// Make API call to fetch Issue details
		this.setState({ isLoading: true, data: null });
		axios.get(`http://10.10.14.127:7070/innote/jira/issues/${issueId}`).then(({ data }) => {
			this.setState({ data, isLoading: false });
		});
	}

	componentDidMount() {
		const { match: { params: { issueId } } } = this.props;
		this.getData(issueId);
	}

	changeTab = selectedTab => {
		this.setState({ selectedTab });
	};

	goBack = () => {
		this.setState({ redirectToHome: true });
	};

	componentDidUpdate(prevProps) {
		const { match: { params: { issueId } } } = this.props;
		if (prevProps.match.params.issueId !== issueId) {
			this.getData(issueId);
		}
	}

	render() {
		return (
			<Fragment>
				{this.state.redirectToHome && <Redirect to='/' />}
				<DetailsHeader
					isLoading={this.state.isLoading}
					data={this.state.data}
					selectedTab={this.state.selectedTab}
					changeTab={this.changeTab}
					goBack={this.goBack}
				/>
				<DetailsBody
					isLoading={this.state.isLoading}
					selectedTab={this.state.selectedTab}
					data={this.state.data}
				/>
			</Fragment>
		);
	}
}

export default DetailsComponent;
