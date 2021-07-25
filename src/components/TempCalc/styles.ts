import styled from 'styled-components';

export const Temp = styled.div`
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 1rem;
	box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
	margin: 3.5% auto;
	padding: 3%;
	width: 30rem;

	@media ${({ theme }) => theme.mediaQueries.mobileMedium} {
		margin: 4% auto;
		padding: 4%;
		width: 90%;
	}
`;

export const TempGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:not(:last-of-type) {
		margin-bottom: 5%;
	}
`;

export const TempResetButton = styled.button`
	background-color: ${({ theme }) => theme.colors.curiousBlue};
	border: none;
	border-radius: 5rem;
	color: ${({ theme }) => theme.greys.whiteSmoke};
	font-size: 1.125rem;
	letter-spacing: 0.5px;
	margin: 0 auto;
	padding: 3% 0;
	transition: all 175ms ease-in-out;
	width: 60%;

	@media (hover) {
		&:hover {
			background-color: ${({ theme }) => theme.colors.scooter};
			box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
			cursor: pointer;
			transform: translateY(-0.25rem);
		}

		&:active {
			transform: translateY(0.25rem);
		}
	}
`;
