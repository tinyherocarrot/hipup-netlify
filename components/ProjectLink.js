import React from "react"
import Link from "next/link"

const ProjectLink = ({ project }) => (
  <>
    <Link as={`/p/${project.id}`} href={`/project?title=${project.title}`}>
      <div className="project-card">
        <a>{project.title} →</a>
        <img
          className="article-img"
          src="https://placekitten.com/305/205"
          alt=" "
        />
      </div>
    </Link>
    <style jsx>{`
      a,
      img {
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }
      a:hover {
        text-decoration: underline;
      }
      .project-card {
        display: flex;
        flex-direction column
      }
    `}</style>
  </>
)

export default ProjectLink
