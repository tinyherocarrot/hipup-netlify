import Head from "next/head"

import communityEvents from "../data/communityEvents.json"

// TODO: make description section render line breaks
const Community = () => (
  <>
    <Head>
      <title>HIPUP | Community</title>
    </Head>
    <div className="centered-margined">
      {communityEvents.map(
        ({ sys: { id }, fields: { eventName, description } }) => (
          <section key={id}>
            <h2>{eventName}</h2>
            <p className="font-light">{description}</p>
          </section>
        )
      )}
    </div>

    <style jsx>{`
      section {
        padding: 4rem 1rem;
        border-bottom: 1px solid grey;
      }
    `}</style>
  </>
)

export default Community
