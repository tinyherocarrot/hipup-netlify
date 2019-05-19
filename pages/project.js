import { withRouter } from "next/router"
import Head from "next/head"

import Layout from "../components/Layout.js"
import ContactForm from "../components/ContactForm.js"

//TODO: figure out how to do some code fetching (import MD file) after next router obj params

const Content = withRouter(({ router: { query: { title } } }) => (
  <>
    <Head>
      <title>
        HIPUP | {title}
      </title>
    </Head>
    <section>
      <img
        className="project-hero"
        src="https://via.placeholder.com/400x150.png?text=Cover+Image"
        alt=""
      />
    </section>
    <h1>{title.toUpperCase()}</h1>
    <section className="centered-margined">
      <p>
        This is the project description. Lorem ipsum dolor amet waistcoat small
        batch brunch, jianbing master cleanse air plant bitters art party
        meditation photo booth palo santo selfies. Forage raw denim roof party
        DIY crucifix literally seitan celiac kogi slow-carb knausgaard taiyaki.
      </p>
      <h2>Eligibility</h2>
      <ul>
        <li>16 years of age</li>
        <li>Currently enrolled in high school</li>
        <li>Asian / Pacific Islander</li>
      </ul>
      <h2>The Team</h2>
      <div className="team-grid">
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
      <h2>Want to Learn More?</h2>
      <ContactForm />
    </section>

    <style jsx>{`
      h2 {
        text-align: left;
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
        gap: 10px;
        max-width: 960px;
        margin: 0 auto;
      }
      .profile-card {
        display: flex;
        flex-direction: column;
      }
      .profile-pic {
        border-radius: 50%;
      }
    `}</style>
  </>
))

const Page = () => (
  <Layout>
    <Content />
  </Layout>
)

export default Page
