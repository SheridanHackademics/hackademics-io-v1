import styled from "styled-components";

const Container = styled.div`
    width: ${props => props.theme.breakpoints.desktop};
    margin: auto;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    width: 100%;
    padding: 0rem 2rem;
    box-sizing: border-box;
  }
`;

export default Container;