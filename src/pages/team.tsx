import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { DefaultLayout } from "../components/layouts"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import Img from "gatsby-image"
import Hero from "../components/hero"
import Container from "../components/container"
import { Edges, IChildImageSharp, Node } from "../types"
import SEO from "../components/seo"

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        menuLinks: {
          name: string
          slug: string
          footer: boolean
        }[]
      }
    }
    header: IChildImageSharp
    allContentfulTeam: Edges<Node<ITeam>>
  }
}

interface ITeam {
  id?: string
  teamName: string
  order?: number
  featured?: boolean
  team_member: ITeamMember[]
}

interface ITeamMember {
  id?: string
  fullName: string
  biography: {
    biography: string
  }
  photo: {
    fluid: any
  }
  teamLead?: boolean
}

type Direction = "column" | "column-reverse" | "row" | "row-reverse"

const Section = styled.section<{ textCentered?: boolean, mobileDirection?: Direction, direction: Direction }>`
  margin: 8rem 0rem 12rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: ${props => props.direction};
  text-align: ${props => (props.textCentered ? "center" : "left")};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 6rem 0rem 0rem 0rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 2rem 0rem 0rem 0rem;
    flex-direction: ${props => props.mobileDirection ?? props.direction};
  }
`

const Header = styled.h2`
  font-family: ${props => props.theme.text.font};
  color: ${props => props.theme.palette.uncommon.lightBlack};
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  height: 75px;
`;

const TeamHeader = styled(Header)`
  font-size: 2.25em;
  margin-top: 4rem;
`;

const MemberHeader = styled(Header)`
  font-size: 2em;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 50px;
    font-size: 1.5em; 
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 50px;
    font-size: 1.4em; 
  }
`;

const SectionParagraph = styled.p`
  font-family: ${props => props.theme.text.font};
  color: ${props => props.theme.palette.uncommon.lightBlack};
  font-size: 1.5em;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.25em; 
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: left;
  }
`

const SectionContent = styled.div<{ direction?: boolean }>`
  flex: 1; /* additionally, equal width */
  padding-left: 7rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 3.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: center;
    padding: 1rem;
    margin-bottom: 2rem;
  }
`

const SquareImage = styled.div`
  width: 534px;
  height: 534px;
  margin-bottom: 2em;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 35%;
    height: 35%;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%; 
  }
`;

const SquareGridImage = styled(SquareImage)`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const ExecutiveSection = ({ teamName, team_member: members }: ITeam) => (
  <>
    {members.map(a => (
      <Section direction={"row-reverse"} mobileDirection={"column-reverse"}>
        <SectionContent>
          <MemberHeader>
            {a.fullName} - {teamName}
          </MemberHeader>
          <SectionParagraph>{a.biography.biography}</SectionParagraph>
        </SectionContent>
        <SquareImage>
          <Img
            alt={a.fullName}
            fluid={a.photo.fluid}
            imgStyle={{ objectFit: "cover" }}
          />
        </SquareImage>
      </Section>
    ))}
  </>
)

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 6rem;
  grid-column-gap: 16rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-row-gap: 2rem;
    grid-column-gap: 8rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const TeamMemberContainer = styled.div`
  width: 100%;
  height: fit-content;
`

const TeamSection = ({ teamName, team_member: members }: ITeam) => (
  <Section direction={"column"} textCentered={true}>
    <TeamHeader>{teamName}</TeamHeader>
    <TeamContainer>
      {members.map(a => (
        <TeamMemberContainer key={a.id}>
          <SquareGridImage>
            <Img
              alt={`${a.fullName}`}
              fluid={a.photo.fluid}
              imgStyle={{ objectFit: "cover" }}
            />
          </SquareGridImage>
          <MemberHeader>
            {a.teamLead ? `${a.fullName} - Lead` : a.fullName}
          </MemberHeader>
          <SectionParagraph>{a.biography.biography}</SectionParagraph>
        </TeamMemberContainer>
      ))}
    </TeamContainer>
  </Section>
)

const TeamPage = ({ data }: IProps) => {
  var teams = data.allContentfulTeam.edges

  teams.map((team: Node<ITeam>) => {
    team.node.team_member.sort((a, b) => (a.teamLead > b.teamLead ? -1 : +1))
  })

  return (
    <DefaultLayout>
      <SEO title="Team" />
      <Navbar useDark={true} menuLinks={data.site.siteMetadata.menuLinks} />
      <Img fluid={data.header.childImageSharp.fluid} alt="header" />
      <Container>
        <Hero title="The Team" description="Meet the Hackademics team." />

        {teams.map((team: Node<ITeam>) => (

          team.node.featured ? (
            <ExecutiveSection
              key={team.node.id}
              teamName={team.node.teamName}
              team_member={team.node.team_member}
            />
          ) : (
              <TeamSection
                key={team.node.id}
                teamName={team.node.teamName}
                team_member={team.node.team_member}
              />
            )
        ))}
      </Container>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </DefaultLayout>
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
          footer
        }
      }
    }
    header: file(name: { eq: "Red-Header" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allContentfulTeam(
      sort: { fields: team_member___team___order, order: ASC }
    ) {
      edges {
        node {
          id
          teamName
          order
          featured
          team_member {
            id
            fullName
            biography {
              biography
            }
            photo {
              fluid(maxWidth: 534, maxHeight: 534) {
                ...GatsbyContentfulFluid_noBase64
              }
            }
            teamLead
          }
        }
      }
    }
  }
`

export default TeamPage
