import React from "react"
import Link from "next/link"

const ProjectLink = ({ project }) => (
  <>
    <Link as={`/p/${project.id}`} href={`/project?title=${project.title}`}>
      <div className="project-card">
        <a>{project.title} →</a>
        <div className="project-img"></div>

      </div>
    </Link>
    <style jsx>{`
      a {
        color: black;
        margin-bottom: 1rem;
      }
      a:hover {
        text-decoration: underline;
      }
      .project-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-height: 300px;
        width: auto;
        cursor: pointer;
      }
      .project-card:hover {
        background-color: lightgrey
      }
      .project-img {
        background: url("https://placekitten.com/305/205") no-repeat left top;
        height: 300px;
        width: 300px;
      }
    `}</style>
  </>
)

export default ProjectLink
