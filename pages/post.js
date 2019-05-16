import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'
import ContactForm from "../components/ContactForm.js"

//TODO: figure out how to do some code fetching (import MD file) after next router obj params

const Content = withRouter(({ router: { query : { title }} }) => (
  <section>
    <img className="project-hero" src="https://via.placeholder.com/400x150.png?text=Cover+Image" alt=""/>
    <h1>{title}</h1>
    <main>
      <p>This is the project description. 
        Lorem ipsum dolor amet waistcoat small batch brunch, jianbing master cleanse air plant bitters art party meditation photo booth palo santo selfies. Forage raw denim roof party DIY crucifix literally seitan celiac kogi slow-carb knausgaard taiyaki. 
      </p>
      <h2>Eligibility</h2>
      <h2>The Team</h2>
      <h2>Want to Learn More?</h2>
      <ContactForm />
    </main>

    <style jsx>{`
      h2 {
        text-align: left;
      }
      .project-hero {
        left: 0;
        width: 100vw;
        height: auto
      }
    `}</style>
  </section>
))

const Page = () =>(
  <Layout>
    <Content />
  </Layout>
)

export default Page