import React from 'react';
import styled from 'styled-components';
import Placeholder from '@datashop/placeholder';
import { default as DatashopCard } from '@datashop/card';
import { FlexContainer, ElementBar, Element } from 'components/Listing/components';

const Card = styled(DatashopCard)`
margin:8px 0;
`;

const Loader = () => {
	return (
		<React.Fragment>
			<Placeholder>
				<ElementBar column direction='bottom' pixels='8'>
					<Card shadow='light'>
						<Element style={{ margin: 8 }}>
							<Placeholder.Image style={{ width: 24, height: 24 }} />
							<FlexContainer column flexGrow={1}>
								<Placeholder.Paragraph length='small' />
								<Placeholder.Paragraph length='medium' />
								<Placeholder.Paragraph length='large' />
								<ElementBar flexGrow={1}>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
								</ElementBar>
							</FlexContainer>
						</Element>
					</Card>
					<Card shadow='light'>
						<Element style={{ margin: 8 }}>
							<Placeholder.Image style={{ width: 24, height: 24 }} />
							<FlexContainer column flexGrow={1}>
								<Placeholder.Paragraph length='small' />
								<Placeholder.Paragraph length='medium' />
								<Placeholder.Paragraph length='large' />
								<ElementBar flexGrow={1}>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
								</ElementBar>
							</FlexContainer>
						</Element>
					</Card>
					<Card shadow='light'>
						<Element style={{ margin: 8 }}>
							<Placeholder.Image style={{ width: 24, height: 24 }} />
							<FlexContainer column flexGrow={1}>
								<Placeholder.Paragraph length='small' />
								<Placeholder.Paragraph length='medium' />
								<Placeholder.Paragraph length='large' />
								<ElementBar flexGrow={1}>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
								</ElementBar>
							</FlexContainer>
						</Element>
					</Card>
					<Card shadow='light'>
						<Element style={{ margin: 8 }}>
							<Placeholder.Image style={{ width: 24, height: 24 }} />
							<FlexContainer column flexGrow={1}>
								<Placeholder.Paragraph length='small' />
								<Placeholder.Paragraph length='medium' />
								<Placeholder.Paragraph length='large' />
								<ElementBar flexGrow={1}>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
								</ElementBar>
							</FlexContainer>
						</Element>
					</Card>
					<Card shadow='light'>
						<Element style={{ margin: 8 }}>
							<Placeholder.Image style={{ width: 24, height: 24 }} />
							<FlexContainer column flexGrow={1}>
								<Placeholder.Paragraph length='small' />
								<Placeholder.Paragraph length='medium' />
								<Placeholder.Paragraph length='large' />
								<ElementBar flexGrow={1}>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
									<Element style={{ width: '16%' }}>
										<Placeholder.Paragraph length='large' />
									</Element>
								</ElementBar>
							</FlexContainer>
						</Element>
					</Card>
				</ElementBar>
			</Placeholder>
		</React.Fragment>
	);
};

export default Loader;
