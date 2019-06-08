import React, { Component } from "react"
import Link from "next/link"
import Head from "next/head"

import Button from "../components/Button"
import ProjectLink from "../components/ProjectLink"

import allProjects from "../data/currentProjects.json"
import homeContent from "../data/homepage.json"

const Homepage = () => {
  // console.log("projects", allProjects)
  // console.log("homeContent", homeContent)
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
        <p>{homeContent[0].fields.missionStatement}</p>
      </section>
      <h1>Get Involved</h1>
      <section className="cards">
        {allProjects.map(
          ({
            fields: {
              projectName,
              projectTagline,
              projectLogo: {
                fields: {
                  file: { url }
                }
              }
            },
            sys: { id }
          }) => (
            <ProjectLink
              key={id}
              projectName={projectName}
              projectImage={url}
              projectTagline={projectTagline}
              entryId={id}
            />
          )
        )}
      </section>
      <section className="group-photo-container">
        <img
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
          margin: 0 3rem;
        }
        .card {
          flex: 1;
        }
        .group-photo-container {
          display: flex;
          justify-content: space-around;
          padding-top: 3rem;
        }
        h1 {
        }
      `}</style>
    </>
  )
}

export default Homepage
