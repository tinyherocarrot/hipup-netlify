import React, { Component } from "react"
import Link from "next/link"
import Head from "next/head"

import Button from "../components/Button"
import ProjectLink from "../components/ProjectLink"

// import { getAllEntries, getProjects } from "../api/get-projects.js"
// import { getHomepage } from "../api/get-homepage.js"
import allProjects from "../data/project.json";
import homeContent from "../data/homepage.json"

// const Homepage = ({ allProjects, homeContent }) => {
const Homepage = () => {
  console.log('projects', allProjects)
  console.log('homeContent', homeContent)
  return (
    <>
      <Head>
        <title>HIPUP</title>
      </Head>
      <section className="homepage-hero">
        <div className="homepage-hero-overlay">
          <h1>Health Intervention Projects for Underserved Populations</h1>
          <Link href={`/projects`}>
            <Button>Check out our work</Button>
          </Link>
        </div>
        <img
          className="homepage-hero-img"
          src="https://via.placeholder.com/400x150.png?text=Homepage+Hero+Image"
          alt=""
        />
      </section>
      <h1>What We Do</h1>
      <section className="centered-margined font-light">
        <p>{homeContent.missionStatement}</p>
      </section>
      <h1>Get Involved</h1>
      <section className="cards">
        {allProjects.map(({fields: { projectName }, sys: { id }}) => (
          <ProjectLink key={id} projectName={projectName} entryId={id}/>
        ))}
      </section>
      <section>
        <img
          className="centered-margined"
          src="https://via.placeholder.com/400x150.png?text=HIPUP+Group+Pic"
          alt="hipup-group-photo"
        />
      </section>

      <style jsx>{`
        img {
          max-width: 100%;
        }
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
          gap: 30px;
          max-width: 100%;
          margin: 0 auto;
        }
        .card {
          flex: 1;
        }

        h1 {
        }
      `}</style>
    </>
  )
}


// Homepage.getInitialProps = async () => {
//   const allProjects = await getProjects();
//   const res2 = await getHomepage()
//   // const allProjects = res.map(p => p.fields)
//   const homeContent = res2.map(p => p.fields)[0]

//   return { allProjects, homeContent };
// };

export default Homepage
