import React from 'react';
import axios from 'axios';
import history from './history';

class App extends React.Component {
	interval;
	state = {
		issueId: 0
	};
	componentDidMount() {
		this.interval = setInterval(() => {
			axios.get(`http://10.10.14.127:7070/innote/jira/latest_issue`).then(({ data: { data = [] } }) => {
				if (data.length > 0 && data[0].id !== this.state.issueId) {
					this.setState({ issueId: data[0].id });
					const notification = new Notification(data[0].key, {
						icon: `${process.env.PUBLIC_URL}/img/jira.png`,
						body: data[0].title
					});
					notification.onclick = () => {
						// Electron specific code
						if (navigator.userAgent.toLowerCase().indexOf(' electron/') > -1) {
							history.push(`/details/${data[0].id}`);
							const { ipcRenderer } = window.require('electron');
							ipcRenderer.send('bringToFocus');
						}
					};
				}
			});
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return this.props.children;
	}
}

export default App;
