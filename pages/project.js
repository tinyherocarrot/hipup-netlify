// import { withRouter } from "next/router"
import Head from "next/head"
import dynamic from "next/dynamic"

import ContactForm from "../components/ContactForm.js"

import { getOneProject } from "../api/get-projects.js"

const ProjectView = ({ project }) => {
  // console.log(project)
  return (
    <>
      <Head>
        <title>HIPUP | {project.projectName}</title>
      </Head>
      <section>
        <img
          className="project-hero"
          src="https://via.placeholder.com/400x150.png?text=Cover+Image"
          // src={cover_image}
          alt=""
        />
      </section>
      <h1>{project.projectName.toUpperCase()}</h1>
      <section className="centered-margined">
        <p>{project.projectDescription}</p>
      </section>
      <section className="centered-margined">
        <h2>Eligibility</h2>
        <ul>
          {project.requirements.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </section>
      <section className="centered-margined">
        <h2>The Team</h2>
        <div className="team-grid">
          {project.teamMembers.map(({ fields: p }, i) => (
            <div key={i} className="profile-card">
              <img
                className="profile-pic"
                // src="https://via.placeholder.com/150.png?text=Cover+Image"
                src={p.profilePhoto.fields.file.url}
                alt=""
              />
              <p>
                {p.fullName}
                <br />
                Health Educator
                <br />{p.bio}
              </p>
            </div>
          ))}

          <div className="profile-card">
            <img
              className="profile-pic"
              src="https://via.placeholder.com/150.png?text=Cover+Image"
              alt=""
            />
            <p>
              Eva Lee
              <br />
              Health Educator
              <br />I love to cook~
            </p>
          </div>
          <div className="profile-card">
            <img
              className="profile-pic"
              src="https://via.placeholder.com/150.png?text=Cover+Image"
              alt=""
            />
            <p>
              Eva Lee
              <br />
              Health Educator
              <br />I love to cook~
            </p>
          </div>
          <div className="profile-card">
            <img
              className="profile-pic"
              src="https://via.placeholder.com/150.png?text=Cover+Image"
              alt=""
            />
            <p>
              Eva Lee
              <br />
              Health Educator
              <br />I love to cook~
            </p>
          </div>
        </div>
      </section>
      <section className="centered-margined">
        <h2>Want to Learn More?</h2>
        <ContactForm />
      </section>

      <style jsx>{`
        h2 {
          text-align: left;
        }
        p,
        li {
          font-weight: lighter;
        }
        li {
          list-style: none;
          padding-top: 0.3rem;
          padding-left: 1.3rem;
          border-left: 1px solid black;
        }
        ul {
        }
        .project-hero {
          left: 0;
          width: 100vw;
          height: auto;
        }
        .team-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          max-width: 960px;
          margin: 0 auto;
        }
        .profile-card {
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .profile-pic {
          border-radius: 50%;
        }
      `}</style>
    </>
  )
}

ProjectView.getInitialProps = async ({ query: { id } }) => {
  const res = await getOneProject(id)
  const project = res.fields
  return { project }
}

export default ProjectView
