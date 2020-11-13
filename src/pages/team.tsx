import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/layout";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Img from "gatsby-image"
import Hero from "../components/hero";
import Container from "../components/container";
import { Edges, IChildImageSharp, Node } from "../types";

interface IProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
                menuLinks: {
                    name: string,
                    slug: string,
                }[]
            }
        },
        header: IChildImageSharp,
        allPagesJson: Edges<Node<ITeamPage>>
    }
}

interface ITeamPage {
    title: string,
    description: string,
    executives: ITeamMember[],
    teams: ITeam[],
}

interface ITeam {
    title: string,
    team: ITeamMember[],
}

interface ITeamMember {
    name: string,
    title: string,
    description: string,
    image: {
        src: IChildImageSharp
    }
}

type Direction = "column" | "column-reverse" | "row" | "row-reverse"

const Section = styled.section<{ textCentered?: boolean, direction: Direction }>`
    margin: 8rem 0rem 12rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: ${props => props.direction};
    text-align: ${props => props.textCentered ? "center" : "left"};
`;

const SectionHeader = styled.h1` 
    font-family: "Open Sans", sans-serif;
    color: ${props => props.theme.palette.uncommon.lightBlack};
    letter-spacing: 1.8px;
    text-transform: uppercase;
    font-size: 2.25em;
    margin-bottom: 1rem;
    height: 75px;
`;

const SectionParagraph = styled.p`
    font-family: "Open Sans", sans-serif;
    color: ${props => props.theme.palette.uncommon.lightBlack};
    font-size: 1.5em;
`;

const SectionContent = styled.div<{ direction?: boolean }>`
    flex: 1; /* additionally, equal width */
    padding-left: 7rem;
`;

const SquareImage = styled.div`
    flex: 1; /* additionally, equal width */
    height: 480px;
`;

const ExecutiveSection = ({ name, title, description, image }: ITeamMember) => (
    <Section direction={"row-reverse"}>
        <SectionContent>
            <SectionHeader>{name} - {title}</SectionHeader>
            <SectionParagraph>{description}</SectionParagraph>
        </SectionContent>
        <SquareImage>
            <Img alt={`${name}, ${title}`}
                fluid={image.src.childImageSharp.fluid}
                style={{ height: '100%' }}
                imgStyle={{ objectFit: 'contain' }} />
        </SquareImage>
    </Section>
);

const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 6rem;
    grid-column-gap: 16rem;
`;

const TeamMemberContainer = styled.div`
    width: '100%';
`;

const TeamSection = ({ title, team }: ITeam) => (
    <Section direction={"column"} textCentered={true}>
        <SectionHeader>{title}</SectionHeader>
        <TeamContainer>
            {team.map(a =>
                <TeamMemberContainer key={a.name}>
                    <Img alt={`${a.name}, ${a.title}`}
                        fluid={a.image.src.childImageSharp.fluid}
                        style={{ marginBottom: '2rem' }}
                        imgStyle={{ objectFit: 'contain' }} />
                    <SectionHeader>
                        {a.title !== "Team Member" ? `${a.name} - ${a.title}` : a.name}
                    </SectionHeader>
                    <SectionParagraph>
                        {a.description}
                    </SectionParagraph>
                </TeamMemberContainer>
            )}
        </TeamContainer>
    </Section>
);

const TeamPage = ({ data }: IProps) => {
    const { node } = data.allPagesJson.edges[1];
    return (
        <Layout title='about'>
            <Navbar
                siteTitle={data.site.siteMetadata.title}
                menuLinks={data.site.siteMetadata.menuLinks}
            />
            <Img fluid={data.header.childImageSharp.fluid} alt="header" />
            <Container>
                <Hero title={node.title} description={node.description} />
                {node.executives.map(a => <ExecutiveSection key={a.name} name={a.name} title={a.title} description={a.description} image={a.image} />)}
                {node.teams.map(a => <TeamSection key={a.title} title={a.title} team={a.team} />)}
            </Container>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
query TeamPage {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          slug
        }
      }
    }
    header: file(name: {eq: "Red-Header"}, extension: {eq: "png"}) {
      childImageSharp {
        fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    allPagesJson {
      edges {
        node {
          description
          title
          executives {
            name
            title
            description
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          teams {
            title
            team {
              name
              title
              description
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }  
`

export default TeamPage;