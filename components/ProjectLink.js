import React from "react"
import Link from "next/link"

const ProjectLink = ({ projectName, entryId }) => (
  <>
    <Link href={`/project?id=${entryId}`} as={`projects/${projectName}`}>
      <div className="project-card">
        <div className="project-img" />
        <h2>{projectName}</h2>
        <p>A project tagline</p>
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
      p {
        font-weight: lighter
      }
      .project-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1
        cursor: pointer;
      }
      .project-card:hover {
        background-color: lightgrey
      }
      .project-img {
        background: url("https://placekitten.com/305/205") no-repeat left top;
        height: 150px;
        width: 300px;
      }
    `}</style>
  </>
)

export default ProjectLink
