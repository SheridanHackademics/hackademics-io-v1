import { graphql } from "gatsby";
import React from "react";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/layout";
import Navbar from "../components/navbar/Navbar";
import Img, { FluidObject } from "gatsby-image"
import Hero from "../components/hero";
import Container from "../components/container";
import styled from "styled-components";
// import Section from "../components/section";

interface IChildImageSharp {
    childImageSharp: {
        fluid: FluidObject,
    }
}

interface Edges<T> {
    edges: T[]
}

interface Node<T> {
    node: T
}

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
        allPagesJson: Edges<Node<IAboutPage>>
    }
}

interface IAboutPage {
    title: string,
    description: string,
    items: IAboutSection[]
}

interface IAboutSection {
    title: string,
    description: string,
    index: number,
    image?: {
        src: IChildImageSharp
    }
}

const Section = styled.section<{ direction: boolean }>`
    margin: 8rem 0rem 12rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: ${props => props.direction ? "left" : "right"};
    flex-direction: ${props => props.direction ? "row" : "row-reverse"};
`;

const SectionHeader = styled.h1` 
    font-family: "Open Sans", sans-serif;
    letter-spacing: 5.5px;
    text-transform: uppercase;
    font-size: 55px;
    margin-bottom: 2rem;
    height: 75px;
`;

const SectionParagraph = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 1.2em;
`;

const SectionContent = styled.div<{ direction?: boolean }>`
    flex: 1; /* additionally, equal width */
    margin: ${props => (props.direction === null)
        ? "0rem"
        : (props.direction) ? "0rem 5rem 0rem 0rem" : "0rem 0rem 0rem 5rem"};
`;

const SquareImage = styled(Img)`
    flex: 1; /* additionally, equal width */
    height: 540px;
    width: 540px;
`;

const AboutSection = ({ title, description, index, image }: IAboutSection) => {

    let img = null;
    if (image) {
        img = <SquareImage fluid={image.src.childImageSharp.fluid} alt={title} />;
    }
    let isEven = index % 2 == 0;
    if (index === 0) {
        isEven = null
    }

    return <Section direction={index % 2 == 0}>
        <SectionContent direction={isEven}>
            <SectionHeader>{title}</SectionHeader>
            <SectionParagraph>{description}</SectionParagraph>
        </SectionContent>
        {img}
    </Section>
};

const AboutPage = ({ data }: IProps) => {
    const { node } = data.allPagesJson.edges[0];
    return (
        <Layout title='about'>
            <Navbar
                siteTitle={data.site.siteMetadata.title}
                menuLinks={data.site.siteMetadata.menuLinks}
            />
            <Img fluid={data.header.childImageSharp.fluid} alt="header" />
            <Container>
                <Hero title={node.title} description={node.description} />
                {node.items.map((a, i) =>
                    <AboutSection title={a.title} description={a.description} index={i} image={a.image ?? null} />
                )}
            </Container>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
query AboutPage {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          slug
        }
      }
    }
    header: file(name: {eq: "Blue-Header"}, extension: {eq: "png"}) {
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
          items {
            title
            description
            image {
              src {
                childImageSharp {
                  fluid {
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
`

export default AboutPage;