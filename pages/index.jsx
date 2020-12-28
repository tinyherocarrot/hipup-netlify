import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Button from '../components/Button';
import ProjectLink from '../components/ProjectLink';

import allProjects from '../data/currentProjects.json';
import homeContent from '../data/homepage.json';

import { getCurrentProjects } from '../lib/api';

const Homepage = ({ projects }) => {
  console.log(projects);
  return (
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
        {allProjects.map(
          ({
            fields: {
              projectName,
              projectTagline,
              projectLogo: {
                fields: {
                  file: { url },
                },
              },
            },
            sys: { id },
          }) => (
            <ProjectLink
              key={id}
              projectName={projectName}
              projectImage={url}
              projectTagline={projectTagline}
              entryId={id}
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
};

export async function getStaticProps({ preview = false }) {
  const projects = (await getCurrentProjects(preview)) ?? [];
  return {
    props: { preview, projects },
  };
}

export default Homepage;
