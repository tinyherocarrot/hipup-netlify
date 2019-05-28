// import { withRouter } from "next/router"
import Head from "next/head"
import dynamic from "next/dynamic"

import Layout from "../components/Layout.js"
import ContactForm from "../components/ContactForm.js"
import { withPageRouter } from "../util/withPageRouter.js"

const ProjectView = withPageRouter(({ projects, router: { query: { title } } }) => {
  console.log("project js 9 DO THESE EQUAL??", projects[0].attributes.title, title, projects[0].attributes.title === title)
  const project = projects.find(p => p.attributes.title == title).attributes
  return (
    <Layout>
      <Head>
        <title>HIPUP | {project.title}</title>
      </Head>
      <section>
        <img
          className="project-hero"
          src="https://via.placeholder.com/400x150.png?text=Cover+Image"
          // src={cover_image}
          alt=""
        />
      </section>
      <h1>{project.title.toUpperCase()}</h1>
      <section className="centered-margined">
        <p>
          {project.description}
        </p>
      </section>
      <section className="centered-margined">
        <h2>Eligibility</h2>
        <ul>
          {project.requirements.map((x, i) => (
            <li key={i}>{x.requirement}</li>
          ))}
        </ul>
      </section>
      <section className="centered-margined">
        <h2>The Team</h2>
        <div className="team-grid">
          {project.team_members.map((p, i) => (
            <div key={i} className="profile-card">
              <img
                className="profile-pic"
                src="https://via.placeholder.com/150.png?text=Cover+Image"
                alt=""
              />
              <p>
                {p.title}
                <br />
                Health Educator
                <br />I love to cook~
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
    </Layout>
  )
})

export default ProjectView
