import styled from "styled-components";

export const Wrapper = styled.div`
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
