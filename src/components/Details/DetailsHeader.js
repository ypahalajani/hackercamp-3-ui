import React, { Fragment } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import Placeholder from '@datashop/placeholder';

const Wrapper = styled.div`box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);`;

const IssueHeader = styled.div`
	padding: 16px;
	cursor: pointer;
	display: flex;
`;

const BackIcon = styled.div`cursor: pointer;`;

const IssueName = styled.p`
	font-size: 20px;
	line-height: 28px;
	margin-left: 4px;
`;

const Tab = styled.div`
	padding: 0 16px 8px;
	cursor: pointer;
	color: ${({ active }) => (!active ? '#868686' : '#2D2B2B')};
	font-weight: ${({ active }) => (!active ? '600' : '700')};
	line-height: 20px;
	border-bottom: ${({ active }) => active && '2px solid #0070DD'};
`;

const IssueNameWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 12px;
`;

const IssueIcon = styled.img`
	width: 18px;
	height: 18px;
`;

const TabWrapper = styled.div`
	display: flex;
	margin-left: 16px;
`;

const IssueIconWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const TabList = [ 'Insights', 'Comments' ];

const DetailsHeader = ({ selectedTab, changeTab, data, isLoading, goBack }) => {
	return (
		<Wrapper>
			{isLoading ? (
				<Placeholder style={{ padding: 16 }} withImage>
					<Placeholder.Paragraph length='small' />
					<Placeholder.Paragraph length='medium' />
				</Placeholder>
			) : (
				<Fragment>
					<IssueHeader>
						<BackIcon onClick={goBack}>
							<ArrowLeftIcon size='medium' label='Go back' />
						</BackIcon>
						<IssueNameWrapper
							onClick={() => {
								if (navigator.userAgent.toLowerCase().indexOf(' electron/') > -1) {
									// Electron-specific code
									const { shell } = window.require('electron');
									shell.openExternal(`https://innovaccer.atlassian.net/browse/${data.key}`);
								}
							}}>
							<IssueName>{data.project.name}</IssueName>
							<IssueIconWrapper>
								<IssueIcon src={data.issue.iconUrl} />
								<IssueName style={{ fontSize: 16 }}>{data.key}</IssueName>
							</IssueIconWrapper>
						</IssueNameWrapper>
					</IssueHeader>
					<TabWrapper>
						{TabList.map((item, index) => (
							<Tab key={index} active={item === selectedTab} onClick={() => changeTab(item)}>
								{item}
							</Tab>
						))}
					</TabWrapper>
				</Fragment>
			)}
		</Wrapper>
	);
};

export default DetailsHeader;
