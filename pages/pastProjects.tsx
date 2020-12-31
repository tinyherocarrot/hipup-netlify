import React, { useState } from 'react';
import Head from 'next/head';

import ProjectLink from '../components/ProjectLink';

// TODO: Fetch this data with getStaticProps
import currentProjects from '../data/currentProjects.json';
import pastProjects from '../data/pastProjects.json';

const PastProjects = () => {
  return (
    <>
      <Head>
        <title>HIPUP | Past Projects</title>
      </Head>
      <h1> PAST PROJECTS </h1>
      <>
    {pastProjects
      .sort((curr, next) => {
        const currDate = new Date(curr.fields.endDate);
        const nextDate = new Date(next.fields.endDate);
        if (currDate < nextDate) {
          return -1;
        } if (currDate > nextDate) {
          return 1;
        }
        return 0;
      })
      .map(
        ({
          fields: {
            projectName, startDate, endDate, description, grantDetails,
          }, sys: { id },
        }) => (
          <article key={id}>
            <small>
              {startDate.slice(0, 4)}
              {' '}
              -
              {endDate.slice(0, 4)}
            </small>
            <h2>{projectName}</h2>
            <p className="font-light">{description}</p>
            <small>
              <i>{grantDetails}</i>
            </small>
          </article>
        ),
      )}
  </>

      <style jsx>
        {`
        a {
          cursor: pointer;
          padding-bottom: 0.2rem;
        }
        a:hover {
          opacity: 0.6
        }
        .project-filters {
          display: flex;
          justify-content: space-between;
          width: 10rem;
          font-size: 1.2rem;
          font-weight: lighter;
          text-align: center;
          margin: 3rem auto;
          font-family: "Playfair Display", serif;
          line-height: 1.2rem;
        }
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 30px;
          justify-items: center;
        }
      `}
      </style>
    </>
  );
};

export default PastProjects;
