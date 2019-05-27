import React, { useState } from "react"
import Head from "next/head"
import { withRouter } from "next/router"

import Layout from "../components/Layout"
import ProjectLink from "../components/ProjectLink"
import allProjects from "../content/_projects/*.md"
console.log(allProjects)

const Projects = withRouter(({ router: { query: { title } } }) => {
  const [filter, toggleFilter] = useState("Current")

  return (
    <Layout>
      <Head>
        <title>HIPUP | {title}</title>
      </Head>

      <div className="project-filters">
        <a onClick={() => toggleFilter("Current")}>Current</a>
        {"  |  "}
        <a onClick={() => toggleFilter("Past")}>Past</a>
      </div>

      <div className="project-grid centered-margined">
        {allProjects
          .filter(({ attributes: { is_current } }) =>
            filter === "Current" ? is_current : !is_current
          )
          .map(({ attributes }, i) => (
            <ProjectLink key={i} project={attributes} />
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
    </Layout>
  )
})

export default Projects
