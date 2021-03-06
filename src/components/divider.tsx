import styled from 'styled-components';

const Divider = styled.div`
    border-top: 1rem solid ${props => props.theme.palette.common.black};
    display: block;
    width: 100%;
    margin: 3rem 0px;
`;

export default Divider;
