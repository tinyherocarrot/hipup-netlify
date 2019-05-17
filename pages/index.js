import React, { Component } from "react"
import Link from "next/link"
import Head from "next/head"

import Layout from "../components/Layout"
import Button from "../components/Button"
import ProjectLink from "../components/ProjectLink"
// import content from '../content/_pages/home.md';

function getProjects() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ]
}

export default function Homepage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Arapey|Noto+Sans+TC:300,500"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <section className="homepage-hero">
          <div className="homepage-hero-overlay">
            <h1>Health Intervention Projects for Underserved Populations</h1>
            <Link href={`/allProjects`}>
              <Button>Check out our work</Button>
            </Link>
          </div>
          <img
            className="homepage-hero-img"
            src="https://via.placeholder.com/400x150.png?text=Homepage+Hero+Image"
            alt=""
          />
        </section>
        <h1>What we do</h1>
        <section className="centered-margined">
          <p>
            This is where the mission statement will go. Lorem ipsum dolor amet
            waistcoat small batch brunch, jianbing master cleanse air plant
            bitters art party meditation photo booth palo santo selfies.
          </p>
        </section>
        <h1>Get Involved</h1>
        <section className="cards">
          {getProjects().map((project, i) => (
            <ProjectLink key={project.id} project={project} />
          ))}
        </section>
        <section>
          <img
            className=""
            src="https://via.placeholder.com/400x150.png?text=HIPUP+Group+Pic"
            alt="hipup-group-photo"
          />
        </section>
      </Layout>

      <style jsx>{`
        .homepage-hero {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .homepage-hero-img {
          width: 100vw;
          height: auto;
        }
        .homepage-hero-overlay {
          position: absolute;
          text-align: center;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          max-width: 960px;
          margin: 0 auto;
        }
        .card {
          flex: 0 0 calc(16.66% - 20px);
        }

        h1 {
        }
      `}</style>
    </>
  )
}

// export default class Index extends Component {
//   render() {
//     let { html , attributes:{ title, cats } } = content;
//     return (
//       <article>
//           <h1>{title}</h1>
//           <div dangerouslySetInnerHTML={{ __html: html }}/>
//           <ul>
//               { cats.map((cat, k) => (
//                   <li key={k}>
//                     <h2>{cat.name}</h2>
//                     <p>{cat.description}</p>
//                   </li>
//               ))}
//           </ul>
//       </article>
//     )
//   }
// }

// export default Index
