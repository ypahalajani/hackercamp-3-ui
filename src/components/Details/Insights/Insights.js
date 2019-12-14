import React from 'react';
import styled from 'styled-components';
import Lozenge from '@atlaskit/lozenge';

const Wrapper = styled.div`padding: 16px;`;

const Title = styled.p`
	color: rgb(23, 43, 77);
	font-weight: 600;
	font-size: 24px;
`;

const Label = styled.p`
	color: #5e6c84;
	font-weight: 600;
`;

const PropertyWrapper = styled.div`margin-top: 16px;`;

const DarkLabel = styled.p`
	color: #172b4d;
	font-weight: 700;
`;

const Description = styled.p`
	color: ${({ isEmpty }) => (isEmpty ? 'rgb(137, 147, 164)' : '#172b4d')};
	margin-top: 4px;
	font-weight: 600;
	line-height: 20px;
`;

const DescriptionWrapper = styled.div`
	display: flex;
	margin-top: 4px;
`;

const Avatar = styled.img`
	width: 24px;
	margin-right: 8px;
`;

const Insights = ({ data }) => {
	return (
		<Wrapper>
			<Title>{data.title}</Title>
			<PropertyWrapper>
				<DarkLabel>Description</DarkLabel>
				<Description isEmpty={!data.discription}>{data.discription || 'None'}</Description>
			</PropertyWrapper>
			<PropertyWrapper>
				<DarkLabel>Status</DarkLabel>
				<Lozenge>
					<Description style={{ paddingLeft: 2, paddingRight: 2 }} isEmpty={!data.status.name}>
						{data.status.name || 'None'}
					</Description>
				</Lozenge>
			</PropertyWrapper>
			<PropertyWrapper>
				<Label>ASSIGNEE</Label>
				<DescriptionWrapper>
					<Avatar src={data.assignee.avatarUrls['16x16']} />
					<Description isEmpty={!data.assignee.displayName}>
						{data.assignee.displayName || 'None'}
					</Description>
				</DescriptionWrapper>
			</PropertyWrapper>
			<PropertyWrapper>
				<Label>REPORTER</Label>
				<DescriptionWrapper>
					<Avatar src={data.reporter.avatarUrls['16x16']} />
					<Description>{data.reporter.displayName}</Description>
				</DescriptionWrapper>
			</PropertyWrapper>
			<PropertyWrapper>
				<Label>SPRINT</Label>
				<Description isEmpty={!data.sprint}>{data.sprint || 'None'}</Description>
			</PropertyWrapper>
			<PropertyWrapper>
				<Label>STORY POINTS</Label>
				<Description isEmpty={!data.storypoints}>{data.storypoints || 'None'}</Description>
			</PropertyWrapper>
			<PropertyWrapper>
				<Label>PRIORITY</Label>
				<DescriptionWrapper>
					<Avatar src={data.priority.iconUrl} />
					<Description>{data.priority.name}</Description>
				</DescriptionWrapper>
			</PropertyWrapper>
		</Wrapper>
	);
};

export default Insights;
