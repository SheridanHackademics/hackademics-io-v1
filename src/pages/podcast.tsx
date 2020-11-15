import { graphql } from "gatsby";
import React, { AudioHTMLAttributes, useEffect, useRef, useState } from "react";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/layout";
import Navbar from "../components/navbar/Navbar";
import Img, { FluidObject } from "gatsby-image"
import Hero from "../components/hero";
import Container from "../components/container";
import styled from "styled-components";
import { PrimaryColor } from "../themes/theme";

import * as Pause from "../assets/pause.svg";
import * as Play from "../assets/play.svg";

interface IChildImageSharp {
    childImageSharp: {
        fluid: FluidObject,
    }
}

interface Edges<T> {
    edges: T[]
}

interface Node<T> {
    nodes: T[],
    totalCount?: number,
}

interface IPodcast {
    enclosure: {
        length: number,
        type: string,
        url: string,
    },
    isoDate: string,
    link: string,
    pubDate: string,
    title: string,
    guid: string,
    dc: {
        creator: string,
    },
    creator: string,
    contentSnippet: string,
    content: string,
    itunes: {
        duration: string,
        episode: string,
        explicit: string,
        image: string,
        season: string,
        summary: string,
    }
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
        allFeedHackademicsPodcast: Node<IPodcast>,
        pagesJson: {
            title: string,
            description: string,
        }
    }
}

interface IPlayer {
    link: string,
}

const PodcastSection = styled.div`

`;

const GridContainer = styled.div`

`;

// const Player = ({ link }: IPlayer) => (

// )

interface ILink {
    url: string,
    text: string,
}

interface IAudio {
    src: string,
    seek: number,
    children: React.ReactNode,
}

const Time = ({ seconds }: { seconds: number }) => {
    let min: any = Math.floor(seconds / 60);
    let sec: any = Math.floor(seconds - min * 60);

    if (min < 10) { min = `0${min}` }
    if (sec < 10) { sec = `0${sec}` }
    return <span>{`${min}:${sec}`}</span>;
}

const AudioContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const AudioButton = styled.div`
    border-radius: 90px;
    height: 4rem;
    width: 4rem;
    margin: 1rem;
    background-color: ${props => props.theme.palette.uncommon.brightBlack};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SeekContainer = styled.div`
    width: 100%;
    padding: 0rem 2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

const ProgressBar = styled.progress`
    width: 100%;
    padding: 0rem 1rem;
    box-sizing: border-box;
    appearance: none;
    cursor: pointer;

    &::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 2px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
`;

const PodcastDetails = styled.div`
    display: flex;
    /* flex-direction: column; */
    padding: 1rem; 
`;

const Audio = ({ src, seek, children }: IAudio) => {
    let [playing, setPlaying] = useState(false);
    let [loading, setLoading] = useState(true);
    let [currentTime, setCurrentTime] = useState(seek);
    let [length, setLength] = useState(0);
    let audio = useRef(null);

    useEffect(() => {
        let a: HTMLAudioElement = audio.current;
        if (playing) {
            a.play();
        } else {
            a.pause();
        }
    }, [audio, playing]);

    useEffect(() => {
        if (audio !== null) {
            audio.current.currentTime = seek;
        }
    }, [audio, seek]);

    const updateTime = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
        setCurrentTime(event.currentTarget.currentTime);
    }

    const onReady = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
        setLength(event.currentTarget.duration);
        setLoading(false);
    }

    const onSeek = (event: React.MouseEvent<HTMLProgressElement, MouseEvent>) => {
        let unit = length / event.currentTarget.clientWidth;
        let x = event.pageX - event.currentTarget.offsetLeft;
        let value = x * unit;
        if (audio !== null) {
            audio.current.currentTime = value;
        }
    }

    return <AudioContainer>
        <audio src={src} ref={audio} onTimeUpdate={updateTime} onLoadedMetadata={onReady} >Your browser does not support the <code>audio</code> element.</audio>
        {
            loading ? "Loading" :
                <>
                    <PodcastDetails>
                        <AudioButton onClick={() => setPlaying(!playing)}><img src={playing ? Pause : Play} /></AudioButton>
                        {children}
                    </PodcastDetails>
                    <SeekContainer>
                        <Time seconds={currentTime} />
                        <ProgressBar onClick={onSeek} value={currentTime} max={length} />
                        <Time seconds={length} />
                    </SeekContainer>
                </>
        }
    </AudioContainer >
}

const ContentContainer = styled.div`
    padding: 2rem;
    margin-left: 150px;
`;

const ContentList = styled.ul`
    margin-left: 1rem; 
`;

const ContentParagraph = styled.p`
    margin: 1rem 0rem;
`;

const Content = ({ content, seekTo }: { content: string, seekTo: (time: number) => void }) => {
    let timeTest = new RegExp(/^[0-9]*:[0-9][0-9] - /);
    let minuteRegex = new RegExp(/^[0-9]*/);
    let secondRegex = new RegExp(/:[0-9]{2}/);
    let showLinksTest = new RegExp(/<p><a (.+?)<\/a><\/p>/);
    let showUrlRegex = new RegExp(/^href="(.+?)"/);
    let showTextRegex = new RegExp(/<strong>(.+?)<\/strong>/);
    let splitRegex;
    if (content.startsWith("<p><strong>")) {
        splitRegex = new RegExp(/<p><strong>(.+?)<\/strong><\/p>\n/);
    } else {
        splitRegex = new RegExp(/<p>(.+?)<\/p>\n/);
    }
    let b = content.split(splitRegex).filter(s => s.length !== 0).map((s, i) => {
        if (i === 0) {
            return { type: 'description', content: s };
        } else if (showLinksTest.test(s)) {
            let meta = s.split(showLinksTest).filter(s => s !== '').filter(s => s !== '\n').map(s => {
                let url = showUrlRegex.exec(s).pop();
                let text = showTextRegex.exec(s).pop();
                return { url, text }
            });
            return { type: 'links', content: s, meta };
        } else if (timeTest.test(s)) {
            let text = s.replace(timeTest, '');
            let minute = parseInt(minuteRegex.exec(s).pop());
            let second = parseInt(secondRegex.exec(s).pop().replace(':', ''));
            let timestamp = (minute * 60) + second;
            return { type: 'time', content: s, meta: { text, timestamp, minute, second } };
        } else {
            return { type: 'long', content: s };
        }
    }).reduce((acc, item) => {
        switch (item.type) {
            case 'description': if (!acc.description) { acc.description = ""; } acc.description = item.content; break;
            case 'links': if (!acc.links) { acc.links = []; } (item.meta as any[]).forEach(m => acc.links.push(m)); break;
            case 'time': if (!acc.time) { acc.time = []; } acc.time.push(item.meta); break;
            case 'long': if (!acc.long) { acc.long = ""; } acc.long += item.content; break;
        };
        return acc;
    }, { description: "", time: [], links: [], long: "" });
    return <ContentContainer>
        <ContentParagraph>{b.description}</ContentParagraph>
        <h2>Show Notes</h2>
        <ContentList>
            {b.links.map(l => <li key={l.url}><a href={l.url} rel="nofollow">{l.text}</a></li>)}
        </ContentList>
        <h2>Time Links</h2>
        <ContentList>
            {b.time.map(t => <li key={t.timestamp}><a href="javascript:;" onClick={() => seekTo(t.timestamp)}><Time seconds={t.timestamp} /></a> - {t.text}</li>)}
        </ContentList>
        <h2>Long Description</h2>
        <p>{b.long}</p>
    </ContentContainer>
}

const PodcastImg = styled.img`
    width: 150px;
    height: 150px;
`;

const PodcastContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const PodcastPlayer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
`;

const PodcastTitle = styled.h2`
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    padding-left: 1rem;
`;

const PodcastSubTitle = styled.h4`
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    padding-left: 1rem;
`;

const PodcastHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

const Flex = styled.div`
    width: 100%;
    display: flex;
`;

const Podcast = ({ title, imageSrc, pubDate, enclosure, content }: any) => {
    let [seek, setSeek] = useState(0);
    let date = new Date(pubDate);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let postedDate = date.toLocaleDateString(undefined, options);
    return <PodcastContainer>
        <Flex>
            <PodcastImg src={imageSrc} />
            <PodcastPlayer>
                <Audio seek={seek} src={enclosure.url}>
                    <PodcastHeader>
                        <PodcastTitle>{title}</PodcastTitle>
                        <PodcastSubTitle>{postedDate}</PodcastSubTitle>
                    </PodcastHeader>
                </Audio>
            </PodcastPlayer>
        </Flex>
        <Content content={content} seekTo={(time) => setSeek(time)} />
    </PodcastContainer>
}

const SectionHeader = styled.h1` 
    font-family: "Open Sans", sans-serif;
    color: ${props => props.theme.palette.uncommon.lightBlack};
    letter-spacing: 1.8px;
    text-transform: uppercase;
    font-size: 2.25em;
    margin-bottom: 1rem;
    height: 75px;
    text-align: center;

`;

const Section = styled.section`
    margin: 8rem 0rem 12rem;
    width: 100%;
`;

const PodcastsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
`;

const PodcastPage = ({ data }: IProps) => {
    const { nodes } = data.allFeedHackademicsPodcast;
    let podcasts = nodes.reverse();
    const latest = podcasts[podcasts.length - 1];
    podcasts = podcasts.slice(0, podcasts.length - 2);
    return (
        <Layout title='about'>
            <Navbar
                siteTitle={data.site.siteMetadata.title}
                menuLinks={data.site.siteMetadata.menuLinks}
            />
            <Img fluid={data.header.childImageSharp.fluid} alt="header" />
            <Container>
                <Hero title={data.pagesJson.title} description={data.pagesJson.description} />
                <Section>
                    <SectionHeader>Our Latest Podcast</SectionHeader>
                    <Podcast imageSrc={latest.itunes.image} title={latest.title} pubDate={latest.isoDate} enclosure={latest.enclosure} content={latest.content} />
                </Section>
                <Section>
                    <SectionHeader>Our Past Podcasts</SectionHeader>
                    <PodcastsContainer>
                        {podcasts.map(p => <Podcast key={p.guid} imageSrc={p.itunes.image} title={p.title} pubDate={p.isoDate} enclosure={p.enclosure} content={p.content} />)}
                    </PodcastsContainer>
                </Section>
            </Container>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
query PodcastPage {
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
    allFeedHackademicsPodcast(sort: {order: DESC, fields: isoDate}) {
      totalCount
      nodes {
        enclosure {
          length
          type
          url
        }
        isoDate
        link
        pubDate
        title
        guid
        dc {
          creator
        }
        creator
        contentSnippet
        content
        itunes {
          duration
          episode
          explicit
          image
          season
          summary
        }
      }
    }
    pagesJson {
      title
      description
    }
  }
`

export default PodcastPage;