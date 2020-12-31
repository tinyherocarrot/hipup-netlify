import React, { useState, useMemo } from 'react';
import Head from 'next/head';

import PublicationsCategories from './publications/PublicationsCategories';
import PublicationsList from './publications/PublicationsList';
import { getPublicationsAndCategories, getProjectsWithSlugs } from '../lib/api';
import { getLayout } from '../components/Layout';

const Publications = ({ publications, categories }) => {
  const [currentCategory, changeCategory] = useState('All Publications');
  const filteredPublications = useMemo(() => publications
    .filter(({ publicationCategoryCollection: { items } }) => {
      const applicableCategories = items.map(
        (c) => c.categoryName,
      );
      return currentCategory && currentCategory !== 'All Publications'
        ? applicableCategories.includes(currentCategory)
        : true;
    })
    .sort() // default alpha sort publications
    .map(
      ({
        sys: { id },
        publicationTitle,
        description,
        file: { url },
      }) => ({
        id,
        publicationTitle,
        description,
        url,
      }),
    ), [currentCategory]);

  const categoriesSorted = categories
    .sort(
      (
        { categoryName: cat1 },
        { categoryName: cat2 },
      ) => {
        if (cat1 < cat2) {
          return -1;
        } if (cat1 > cat2) {
          return 1;
        }
        return 0;
      },
    )
    .map(({ sys: { id }, categoryName }) => ({ id, categoryName }));
  categoriesSorted.unshift({ id: 0, categoryName: 'All Publications' });

  return (
    <>
      <Head>
        <title>HIPUP | Publications</title>
      </Head>

      <div className="publications-container">
        <PublicationsCategories
          items={categoriesSorted}
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

export async function getStaticProps({ preview = false }) {
  const { publications, categories } = await getPublicationsAndCategories(preview);
  const projectSlugs = await getProjectsWithSlugs(preview);
  return {
    props: { publications, categories, projectSlugs },
  };
}

Publications.getLayout = getLayout;

export default Publications;
