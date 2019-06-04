import React, { useState } from "react"
import Head from "next/head"

import ProjectLink from "../components/ProjectLink"

import allProjects from "../data/project.json"

const Projects = () => {
  const [filter, toggleFilter] = useState("Current")

  return (
    <>
      <Head>
        <title>HIPUP | Projects</title>
      </Head>

      <div className="project-filters">
        <a
          style={{ borderBottom: filter === "Current" ? "1px solid black" : "" }}
          onClick={() => toggleFilter("Current")}>
          CURRENT
        </a>
        <a
          style={{ borderBottom: filter === "Current" ? "" : "1px solid black" }}
          onClick={() => toggleFilter("Past")}>
          PAST
        </a>
      </div>

      <div className="project-grid centered-margined">
        {allProjects
          .filter(({ fields: { current } }) =>
            filter === "Current" ? current : !current
          )
          .map(({
            fields: {
              projectName,
              projectLogo: {
                fields: { file: {url} }
              }
            },
            sys: { id }
          }) => (
            <ProjectLink key={id} projectName={projectName} projectImage={url} entryId={id} />
          ))}
      </div>

      <style jsx>{`
        a {
          cursor: pointer;
          padding-bottom: 0.2rem;
        }
        .project-filters {
          display: flex;
          justify-content: space-between;
          width: 10rem;
          font-size: 1.2rem;
          font-weight: lighter;
          text-align: center;
          margin: 3rem auto;
          font-family: 'Playfair Display', serif;
          line-height: 1.2rem
        }
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 30px;
          justify-items: center;
        }
      `}</style>
    </>
  )
}

export default Projects
