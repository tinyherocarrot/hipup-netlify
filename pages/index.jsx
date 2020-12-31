import React from 'react';
import Head from 'next/head';

import ProjectLink from '../components/ProjectLink';
import homeContent from '../data/homepage.json';
import { getCurrentProjects, getProjectsWithSlugs } from '../lib/api';
import { getLayout } from '../components/Layout';

const Homepage = ({ projects }) => (
  <>
    <Head>
      <title>HIPUP</title>
    </Head>
    <section className="homepage-hero">
      <div className="homepage-hero-overlay">
        <h1>Health Intervention Projects for Underserved Populations</h1>
      </div>
      <img
        className="homepage-hero-img"
        src={
            homeContent[0].fields.bannerPhoto
              ? homeContent[0].fields.bannerPhoto.fields.file.url
              : 'https://via.placeholder.com/400x150.png?text=Homepage+Hero+Image'
          }
        alt="HIPUP"
      />
    </section>
    <section className="cards">
      {projects.map(
        ({
          projectName,
          slug,
          projectTagline,
          projectLogo: { fileName },
          sys: { id },
        }) => (
          <ProjectLink
            key={id}
            projectName={projectName}
            projectImage={fileName}
            projectTagline={projectTagline}
            entryId={id}
            slug={slug}
          />
        ),
      )}
    </section>

    <style jsx>
      {`
        img {
          max-width: 100%;
        }
        .homepage-hero {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
        }
        .homepage-hero-img {
          width: 100vw;
          height: auto;
        }
        .homepage-hero-overlay {
          position: absolute;
          text-align: center;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          max-width: 100%;
          margin: 0 3rem;
        }
        .card {
          flex: 1;
        }
        .group-photo-container {
          display: flex;
          justify-content: space-around;
          padding-top: 3rem;
        }
        h1 {
        }
      `}
    </style>
  </>
);

export async function getStaticProps({ preview = false }) {
  const projects = await getCurrentProjects(preview);
  const projectSlugs = await getProjectsWithSlugs(preview);
  return {
    props: { preview, projects, projectSlugs },
  };
}

Homepage.getLayout = getLayout;

export default Homepage;
