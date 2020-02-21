import React, { useState, useMemo } from 'react';
import Head from 'next/head';

import PublicationsCategories from './PublicationsCategories';
import PublicationsList from './PublicationsList';
import allPublications from '../../data/publications.json';
import allCategories from '../../data/publicationCategories.json';

const PublicationsPage = () => {
  const [currentCategory, changeCategory] = useState('All Publications');
  const filteredPublications = useMemo(() => allPublications
    .filter(({ fields: { publicationCategory } }) => {
      const applicableCategories = publicationCategory.map(
        (c) => c.fields.categoryName,
      );
      return currentCategory && currentCategory !== 'All Publications'
        ? applicableCategories.includes(currentCategory)
        : true;
    })
    .sort()
    .map(
      ({
        sys: { id },
        fields: {
          publicationTitle,
          description,
          authors,
          file: {
            fields: {
              file: { url },
            },
          },
        },
      }) => ({
        id,
        publicationTitle,
        description,
        authors,
        url,
      }),
    ), [currentCategory]);

  const categories = allCategories
    .sort(
      (
        { fields: { categoryName: cat1 } },
        { fields: { categoryName: cat2 } },
      ) => {
        if (cat1 < cat2) {
          return -1;
        } if (cat1 > cat2) {
          return 1;
        }
        return 0;
      },
    )
    .map(({ sys: { id }, fields: { categoryName } }) => ({ id, categoryName }));
  categories.unshift({ id: 0, categoryName: 'All Publications' });

  return (
    <>
      <Head>
        <title>HIPUP | Publications</title>
      </Head>

      <div className="publications-container">
        <PublicationsCategories
          items={categories}
          currentCategory={currentCategory}
          changeCategory={changeCategory}
        />
        <PublicationsList items={filteredPublications} />
      </div>

      <style jsx>
        {`
        .publications-container {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-areas: "aside main main";
        }
      `}
      </style>
    </>
  );
};

export default PublicationsPage;
