import React, { useState } from 'react';
import Head from 'next/head';

import ProjectLink from '../components/ProjectLink';

import currentProjects from '../data/currentProjects.json';
import pastProjects from '../data/pastProjects.json';

const Projects = () => {
  const [filter, toggleFilter] = useState('Current');

  return (
    <>
      <Head>
        <title>HIPUP | Projects</title>
      </Head>

      <div className="project-filters">
        <a
          className="link--filter-current"
          onClick={() => toggleFilter('Current')}
        >
          CURRENT
        </a>
        <a className="link--filter-past" onClick={() => toggleFilter('Past')}>
          PAST
        </a>
      </div>

      <div className="project-grid centered-margined">
        {filter === 'Current' ? <CurrentProjects /> : <PastProjects />}
      </div>

      <style jsx>
        {`
        a {
          cursor: pointer;
          padding-bottom: 0.2rem;
        }
        a:hover {
          opacity: 0.6
        }
        .link--filter-current {
          border-bottom: ${filter === 'Current' ? '1px solid black' : ''};
        }
        .link--filter-past {
          border-bottom: ${filter === 'Current' ? '' : '1px solid black'};
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

export default Projects;

const CurrentProjects = () => (
  <>
    {currentProjects.map(
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
  </>
);

const PastProjects = () => (
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
);
