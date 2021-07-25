import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading';

interface HeaderProps {
	headingText: string;
}

const HeaderWrapper = styled.header`
	text-align: center;
`;

const Header = ({ headingText }: HeaderProps) => (
	<HeaderWrapper>
		<Heading>{headingText}</Heading>
	</HeaderWrapper>
);

export default Header;
