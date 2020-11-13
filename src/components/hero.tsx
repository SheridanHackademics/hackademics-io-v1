import React from "react";
import styled from "styled-components";
import Divider from "./divider";

const HeroContainer = styled.div`
    text-align: center;
    width: 100%; 
`;

const PageTitle = styled.h1`
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5.5px;
    margin: 3rem 0px;
`;

const PageSubTitle = styled.h3`
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 2.1em;
    margin: 2rem 0px;
`;

interface IProps {
    title: string,
    description: string,
}

const Hero = ({ title, description }: IProps) => (
    <HeroContainer>
        <PageTitle>{title}</PageTitle>
        <PageSubTitle>{description}</PageSubTitle>
        <Divider />
    </HeroContainer>
);

export default Hero;