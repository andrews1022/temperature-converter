import styled from 'styled-components';

const Heading = styled.h1`
	font-size: 6rem;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	margin-bottom: 0.5rem;

	@media ${({ theme }) => theme.mediaQueries.mobileXLarge} {
		font-size: 5rem;
	}

	@media ${({ theme }) => theme.mediaQueries.mobileMedium} {
		margin-top: 7.5%;
	}
`;

export default Heading;
