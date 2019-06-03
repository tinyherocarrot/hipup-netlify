import React, { useState } from "react"
import Head from "next/head"

import ProjectLink from "../components/ProjectLink"

// import { getProjects, getOneProject } from "../api/get-projects.js"
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
          style={{ textDecoration: filter === "Current" ? "underline" : "" }}
          onClick={() => toggleFilter("Current")}>
          Current
        </a>
        <a
          style={{ textDecoration: filter === "Current" ? "" : "underline" }}
          onClick={() => toggleFilter("Past")}>
          Past
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
        }
        .project-filters {
          display: flex;
          justify-content: space-between;
          width: 7rem;
          font-size: 1rem;
          font-weight: lighter;
          text-align: center;
          margin: 3rem auto;
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

// Projects.getInitialProps = async () => {
//   const allProjects = await getProjects()
//   return { allProjects }
// }

export default Projects
