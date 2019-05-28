import React, { Component } from "react"
import Link from "next/link"
import Head from "next/head"

import Layout from "../components/Layout"
import Button from "../components/Button"
import ProjectLink from "../components/ProjectLink"
import content from "../content/_pages/home.md"

const Homepage = ({ projects }) => {
  const homeContent = content.attributes
  console.log('guffaw', homeContent)
  return (
    <Layout>
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
      <h1>What we do</h1>
      <section className="centered-margined font-light">
        <p>{homeContent.mission}</p>
      </section>
      <h1>Get Involved</h1>
      <section className="cards">
        {projects.map(({ attributes }, i) => (
          <ProjectLink key={i} project={attributes} />
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
    </Layout>
  )
}

export default Homepage
