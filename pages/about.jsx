import React from 'react';
import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import homeContent from '../data/homepage.json';
import { getAboutContent, getProjectsWithSlugs } from '../lib/api';
import { getLayout } from '../components/Layout';

const About = ({ missionStatement, teamPhoto }) => (
  <>
    <Head>
      <title>HIPUP</title>
    </Head>

    <h1>What We Do</h1>
    <section className="centered-margined font-light">
      {documentToReactComponents(missionStatement)}
    </section>
    <section className="group-photo-container">
      <img
        src={
            homeContent[0].fields.teamPhoto
              ? homeContent[0].fields.teamPhoto.fields.file.url
              : 'https://via.placeholder.com/400x150.png?text=HIPUP+Group+Pic'
          }
        alt="HIPUP staff"
      />
    </section>
  </>
);

export async function getStaticProps({ preview = false }) {
  const { missionStatement, teamPhoto } = await getAboutContent(preview);
  const projectSlugs = await getProjectsWithSlugs(preview);
  return {
    props: {
      preview, missionStatement, teamPhoto, projectSlugs,
    },
  };
}

About.getLayout = getLayout;

export default About;
