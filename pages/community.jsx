import React from 'react';
import Head from 'next/head';

import { getCommunityEvents } from '../lib/api';

const Community = ({ events }) => (
  <>
    <Head>
      <title>HIPUP | Community</title>
    </Head>
    <div className="centered-margined">
      {events.map(
        ({ sys: { id }, eventName, description }) => (
          <section key={id}>
            <h2>{eventName}</h2>
            <p className="font-light">{description}</p>
          </section>
        ),
      )}
    </div>

    <style jsx>
      {`
      section {
        padding: 4rem 1rem;
        border-bottom: 1px solid grey;
      }
    `}
    </style>
  </>
);

export async function getStaticProps({ preview = false }) {
  const events = await getCommunityEvents(preview) || [];
  return {
    props: { events },
  };
}

export default Community;
