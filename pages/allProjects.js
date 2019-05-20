import React from "react"
import Head from "next/head"
import { withRouter } from "next/router"

import Layout from "../components/Layout"
import ProjectLink from "../components/ProjectLink"

function getProjects() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ]
}

const Projects = withRouter(({ router: { query: { title } } }) => (
    <Layout>
      <Head>
        <title>
          HIPUP | {title}
        </title>
      </Head>

      <div className="project-filters">
        <a>Current</a>
        {"  |  "}
        <a>Past</a>
      </div>

      <div className="project-grid centered-margined">
        {getProjects().map((project, i) => (
          <ProjectLink key={project.id} project={project} />
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
)

export default Projects;
