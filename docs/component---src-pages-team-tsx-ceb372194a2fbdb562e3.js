(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Kxv3:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return C}));var a=n("q1tI"),i=n.n(a),m=n("vOnD"),r=n("WKfY"),o=n("b0ys"),l=n("kM1Z"),d=n("9eSz"),c=n.n(d),u=n("gd0A"),f=n("tcnT"),p=n("vrFN"),h=m.b.section.withConfig({displayName:"team__Section",componentId:"ak6zjn-0"})(["margin:8rem 0rem 12rem 0rem;width:100%;display:flex;justify-content:center;align-content:center;flex-direction:",";text-align:",";@media (max-width:","){margin:6rem 0rem 0rem 0rem;}@media (max-width:","){margin:2rem 0rem 0rem 0rem;flex-direction:",";}"],(function(e){return e.direction}),(function(e){return e.textCentered?"center":"left"}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet}),(function(e){var t;return null!==(t=e.mobileDirection)&&void 0!==t?t:e.direction})),s=m.b.h2.withConfig({displayName:"team__Header",componentId:"ak6zjn-1"})(["font-family:",";color:",";letter-spacing:1.8px;text-transform:uppercase;margin-bottom:1rem;height:75px;"],(function(e){return e.theme.text.font}),(function(e){return e.theme.palette.uncommon.lightBlack})),b=Object(m.b)(s).withConfig({displayName:"team__TeamHeader",componentId:"ak6zjn-2"})(["font-size:2.25em;margin-top:4rem;"]),g=Object(m.b)(s).withConfig({displayName:"team__MemberHeader",componentId:"ak6zjn-3"})(["font-size:2em;@media (max-width:","){height:50px;font-size:1.5em;}@media (max-width:","){height:50px;font-size:1.4em;}"],(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),w=m.b.p.withConfig({displayName:"team__SectionParagraph",componentId:"ak6zjn-4"})(["font-family:",";color:",";font-size:1.5em;@media (max-width:","){font-size:1.25em;}@media (max-width:","){text-align:left;}"],(function(e){return e.theme.text.font}),(function(e){return e.theme.palette.uncommon.lightBlack}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),k=m.b.div.withConfig({displayName:"team__SectionContent",componentId:"ak6zjn-5"})(["flex:1;padding-left:7rem;@media (max-width:","){padding-left:3.5rem;}@media (max-width:","){text-align:center;padding:1rem;margin-bottom:2rem;}"],(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),x=m.b.div.withConfig({displayName:"team__SquareImage",componentId:"ak6zjn-6"})(["width:534px;height:534px;margin-bottom:2em;@media (max-width:","){width:35%;height:35%;}@media (max-width:","){width:100%;}"],(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.mobile})),_=Object(m.b)(x).withConfig({displayName:"team__SquareGridImage",componentId:"ak6zjn-7"})(["@media (max-width:","){width:100%;}"],(function(e){return e.theme.breakpoints.tablet})),y=function(e){var t=e.teamName,n=e.team_member;return i.a.createElement(i.a.Fragment,null,n.map((function(e){return i.a.createElement(h,{direction:"row-reverse",mobileDirection:"column-reverse"},i.a.createElement(k,null,i.a.createElement(g,null,e.fullName," - ",t),i.a.createElement(w,null,e.biography.biography)),i.a.createElement(x,null,i.a.createElement(c.a,{alt:e.fullName,fluid:e.photo.fluid,imgStyle:{objectFit:"cover"}})))})))},v=m.b.div.withConfig({displayName:"team__TeamContainer",componentId:"ak6zjn-8"})(["display:grid;grid-template-columns:1fr 1fr;grid-row-gap:6rem;grid-column-gap:16rem;@media (max-width:","){grid-row-gap:2rem;grid-column-gap:8rem;}@media (max-width:","){grid-template-columns:1fr;}"],(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),E=m.b.div.withConfig({displayName:"team__TeamMemberContainer",componentId:"ak6zjn-9"})(["width:100%;height:fit-content;"]),N=function(e){var t=e.teamName,n=e.team_member;return i.a.createElement(h,{direction:"column",textCentered:!0},i.a.createElement(b,null,t),i.a.createElement(v,null,n.map((function(e){return i.a.createElement(E,{key:e.id},i.a.createElement(_,null,i.a.createElement(c.a,{alt:""+e.fullName,fluid:e.photo.fluid,imgStyle:{objectFit:"cover"}})),i.a.createElement(g,null,e.teamLead?e.fullName+" - Lead":e.fullName),i.a.createElement(w,null,e.biography.biography))}))))},C="1497805235";t.default=function(e){var t=e.data,n=t.allContentfulTeam.edges;return n.map((function(e){e.node.team_member.sort((function(e,t){return e.teamLead>t.teamLead?-1:1}))})),i.a.createElement(r.a,null,i.a.createElement(p.a,{title:"Team"}),i.a.createElement(l.a,{useDark:!0,menuLinks:t.site.siteMetadata.menuLinks}),i.a.createElement(c.a,{fluid:t.header.childImageSharp.fluid,alt:"header"}),i.a.createElement(f.a,null,i.a.createElement(u.a,{title:"The Team",description:"Meet the Hackademics team."}),n.map((function(e){return e.node.featured?i.a.createElement(y,{key:e.node.id,teamName:e.node.teamName,team_member:e.node.team_member}):i.a.createElement(N,{key:e.node.id,teamName:e.node.teamName,team_member:e.node.team_member})}))),i.a.createElement(o.a,{menuLinks:t.site.siteMetadata.menuLinks}))}},gd0A:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),m=n("vOnD"),r=m.b.div.withConfig({displayName:"divider__Divider",componentId:"sc-2jrjnv-0"})(["border-top:1rem solid ",";display:block;width:100%;margin:3rem 0px;"],(function(e){return e.theme.palette.common.black})),o=m.b.div.withConfig({displayName:"hero__HeroContainer",componentId:"sc-1erapno-0"})(["text-align:center;max-width:100vw;"]),l=m.b.h1.withConfig({displayName:"hero__PageTitle",componentId:"sc-1erapno-1"})(["font-family:",";font-weight:bold;text-transform:uppercase;letter-spacing:5.5px;margin:3rem 0px;"],(function(e){return e.theme.text.font})),d=m.b.h3.withConfig({displayName:"hero__PageSubTitle",componentId:"sc-1erapno-2"})(["font-family:",";font-weight:300;font-size:2.1em;margin:2rem 0px;"],(function(e){return e.theme.text.font}));t.a=function(e){var t=e.title,n=e.description;return i.a.createElement(o,null,i.a.createElement(l,null,t),i.a.createElement(d,null,n),i.a.createElement(r,null))}},tcnT:function(e,t,n){"use strict";var a=n("vOnD").b.div.withConfig({displayName:"container__Container",componentId:"sc-1ybk35k-0"})(["width:",";margin:auto;margin-bottom:4rem;@media (max-width:","){width:100%;padding:0rem 2rem;box-sizing:border-box;}"],(function(e){return e.theme.breakpoints.desktop}),(function(e){return e.theme.breakpoints.desktop}));t.a=a}}]);
//# sourceMappingURL=component---src-pages-team-tsx-ceb372194a2fbdb562e3.js.map