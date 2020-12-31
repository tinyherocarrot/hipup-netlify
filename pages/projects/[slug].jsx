import React from 'react';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getProjectsWithSlugs, getProject } from '../../lib/api';
import ContactForm from '../../components/ContactForm';

const Project = ({ project }) => {
  const router = useRouter();

  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>
          HIPUP |
          {project?.projectName}
        </title>
      </Head>
      <section>
        <img
          className="project-hero"
          src="https://via.placeholder.com/400x150.png?text=Cover+Image"
          // src={cover_image}
          alt=""
        />
      </section>
      <h1>{project?.projectName.toUpperCase()}</h1>
      <section className="centered-margined">
        {documentToReactComponents(project?.projectDescription?.content)}
      </section>
      <section className="centered-margined">
        <h2>Eligibility</h2>
        <ul>
          {project?.requirements.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </section>
      <section className="centered-margined">
        <h2>The Team</h2>
        <div className="team-grid">
          {project?.teamMembersCollection.items.map((p, i) => (
            <div key={i} className="profile-card">
              <img
                className="profile-pic"
                src={p?.profilePhoto?.file.url || 'https://via.placeholder.com/150.png?text=Cover+Image'}
                alt=""
              />
              <p>{p?.fullName}</p>
              <p>{p?.role}</p>
              <p>{p?.bio}</p>
            </div>
          ))}
          {/*
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
            <p>Eva Lee</p>
            <p>Health Educator</p>
            <p>I love to cook~</p>
          </div> */}
        </div>
      </section>
      <section className="centered-margined">
        <h2>Want to Learn More?</h2>
        <ContactForm />
      </section>

      <style jsx>
        {`
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
          max-width: 10rem;
        }
        .profile-card > p {
          margin: 0.2rem;
        }
        .profile-pic {
          border-radius: 50%;
          width: 8rem;
          margin: 0 auto;
        }
      `}
      </style>
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths({ preview = false }) {
  // Call an external API endpoint to get projects
  const projects = (await getProjectsWithSlugs(preview)) ?? [];

  // Get the paths we want to pre-render based on projects
  const paths = projects.map(
    ({ slug }) => ({ params: { slug } }),
  );

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the project `slug`.
  // If the route is like /project/1, then params.slug is 1
  const project = await getProject(params.slug);

  // Pass project data to the page via props
  return { props: { project } };
}

export default Project;
