import React from 'react';

const PublicationsList = ({ items }) => (
  <div className="publications">
    {items
      .map(
        ({
          id,
          publicationTitle,
          description,
          authors,
          url,
        }) => (
          <article key={id}>
            <a target="_blank" href={url}>
              <h2>{publicationTitle}</h2>
            </a>
            <p>{description}</p>
            <p>{authors}</p>
          </article>
        ),
      )}
    <style jsx>
      {`
      .publications {
        padding-left: 4rem;
      }
      h2 {
        text-align: left;
        color: black;
        margin: 0.5rem 0rem 0.1rem 0rem;
      }
      article {
        margin-bottom: 3rem;
      }
      article > p {
        font-weight: lighter;
        margin: 0;
      }
    `}
    </style>
  </div>
);

export default PublicationsList;
