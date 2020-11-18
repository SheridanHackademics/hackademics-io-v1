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

const Section = styled.section<{
  textCentered?: boolean
  direction: Direction
}>`
  margin: 8rem 0rem 12rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: ${props => props.direction};
  text-align: ${props => (props.textCentered ? "center" : "left")};
`

const SectionHeader = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: ${props => props.theme.palette.uncommon.lightBlack};
  letter-spacing: 1.8px;
  text-transform: uppercase;
  font-size: 2.25em;
  margin-bottom: 1rem;
  height: 75px;
`

const SectionParagraph = styled.p`
  font-family: "Open Sans", sans-serif;
  color: ${props => props.theme.palette.uncommon.lightBlack};
  font-size: 1.5em;
`

const SectionContent = styled.div<{ direction?: boolean }>`
  flex: 1; /* additionally, equal width */
  padding-left: 7rem;
`

const SquareImage = styled.div`
  width: 534px;
  height: 534px;
  margin-bottom: 2em;
`

const ExecutiveSection = ({ teamName, team_member: members }: ITeam) => (
  <>
    {members.map(a => (
      <Section direction={"row-reverse"}>
        <SectionContent>
          <SectionHeader>
            {a.fullName} - {teamName}
          </SectionHeader>
          <SectionParagraph>{a.biography.biography}</SectionParagraph>
        </SectionContent>
        <SquareImage>
          <Img
            alt={`${name}, ${teamName}`}
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
`

const TeamMemberContainer = styled.div`
  width: "100%";
`

const TeamSection = ({ teamName, team_member: members }: ITeam) => (
  <Section direction={"column"} textCentered={true}>
    <SectionHeader>{teamName}</SectionHeader>
    <TeamContainer>
      {members.map(a => (
        <TeamMemberContainer key={a.id}>
          <SquareImage>
          <Img
            alt={`${a.fullName}`}
            fluid={a.photo.fluid}
            imgStyle={{ objectFit: "cover" }}
          />
          </SquareImage>
          <SectionHeader>
            {a.teamLead ? `${a.fullName} - Lead` : a.fullName}
          </SectionHeader>
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
