import styled from "styled-components";

export const Container = styled.div`
  max-width: 97.2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row' };
  padding: 8rem 2rem;
  align-items: center;

  div {
    flex: 1;

    h3 {
      font-size: 4rem;
      font-weight: 300;
      margin-bottom: 3.2rem;
    }

    &:last-child {
      ${props => props.reverse ? 'padding-right' : 'padding-left'}: 8rem;
    }
  }
`
