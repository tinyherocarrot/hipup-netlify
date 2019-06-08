import React from "react"
import Link from "next/link"

const ProjectLink = ({
  projectName,
  projectImage,
  projectTagline,
  entryId
}) => (
  <>
    <Link
      prefetch
      href={`/project?id=${entryId}`}
      as={`projects/${projectName}`}>
      <div className="project-card">
        <div className="project-img" />
        <h2>{projectName}</h2>
        <p>{projectTagline}</p>
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
        margin: 0 0 0.5rem 0;
        font-weight: lighter;
      }
      h2 {
        margin: 0.5rem 0 0.25rem 0;
      }
      .project-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        cursor: pointer;
        padding: 1.5rem;
        border: 1px solid transparent;
      }
      .project-card:hover {
        border: 1px solid grey;
      }
      .project-img {
        margin: 0 auto;
        background: url(${projectImage}) no-repeat center;
        background-size: contain;
        height: 150px;
        width: 300px;
      }
    `}</style>
  </>
)

export default ProjectLink
