import React, { useState } from "react"
import Head from "next/head"

import ProjectLink from "../components/ProjectLink"

import { getProjects, getOneProject } from "../api/get-projects.js"

const Projects = ({ allProjects }) => {
  const [filter, toggleFilter] = useState("Current")
  console.log("HELLO IT ME ~~~ *** ~~~")
  getOneProject('4a2Kb7BwZiaTz9xS4b5BJi')
  return (
    <>
      <Head>
        <title>HIPUP | Projects</title>
      </Head>

      <div className="project-filters">
        <a onClick={() => toggleFilter("Current")}>Current</a>
        {"  |  "}
        <a onClick={() => toggleFilter("Past")}>Past</a>
      </div>

      <div className="project-grid centered-margined">
        {allProjects
          .filter(({ fields: { current } }) =>
            filter === "Current" ? current : !current
          )
          .map(({ fields: { projectName }, sys: { id } }) => (
            <ProjectLink key={id} projectName={projectName} entryId={id} />
          ))}
      </div>

      <style jsx>{`
        a {
          cursor: pointer;
        }
        .project-filters {
          font-size: 1rem;
          font-weight: lighter;
          text-align: center;
          margin: 2rem auto;
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

Projects.getInitialProps = async () => {
  const allProjects = await getProjects()
  return { allProjects }
}

export default Projects
