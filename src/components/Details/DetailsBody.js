import React from 'react';
import styled from 'styled-components';
import Placeholder from '@datashop/placeholder';

import Insights from './Insights/';
import Comments from './Comments/';

const Wrapper = styled.div``;

const components = {
	Insights,
	Comments
};

const DetailsBody = ({ data, selectedTab, isLoading }) => {
	const Component = components[selectedTab];
	return (
		<Wrapper>
			{isLoading ? (
				<Placeholder style={{ padding: 16 }}>
					<Placeholder.Paragraph length='small' />
					<Placeholder.Paragraph length='large' />
					<Placeholder.Paragraph style={{ marginTop: 20 }} length='medium' />
					<Placeholder.Paragraph length='small' />
					<Placeholder withImage style={{ marginTop: 20 }}>
						<Placeholder.Paragraph length='small' />
						<Placeholder.Paragraph length='medium' />
					</Placeholder>
					<Placeholder withImage style={{ marginTop: 20 }}>
						<Placeholder.Paragraph length='small' />
						<Placeholder.Paragraph length='medium' />
					</Placeholder>
					<Placeholder.Paragraph style={{ marginTop: 20 }} length='medium' />
					<Placeholder.Paragraph length='small' />
					<Placeholder.Paragraph style={{ marginTop: 20 }} length='small' />
					<Placeholder.Paragraph style={{ marginTop: 20 }} length='large' />
					<Placeholder.Paragraph length='medium' />
					<Placeholder.Paragraph length='small' />
				</Placeholder>
			) : (
				<Component data={data} />
			)}
		</Wrapper>
	);
};

export default DetailsBody;
