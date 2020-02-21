import React from 'react';
import {
  shape, number, string, arrayOf,
} from 'prop-types';

const propTypes = {
  items: arrayOf(shape({
    id: number.isRequired,
    publicationTitle: string.isRequired,
    description: string,
    authors: arrayOf(string),
    url: string,
  })).isRequired,
};

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
            <a target="_blank" rel="noopener noreferrer" href={url}>
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

PublicationsList.propTypes = propTypes;
export default PublicationsList;
