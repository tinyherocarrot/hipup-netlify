async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

export async function getPastProjects() {
  const entries = await fetchGraphQL(
    `query {
      pastProjects: pastProjectsCollection(order: projectName_DESC) {
        items {
          sys {
            id
          }
          projectName
          description
          startDate
          endDate
          grantDetails
        }
      }
    }`,
  );
  return entries?.data?.pastProjects?.items;
}

export async function getCurrentProjects() {
  const entries = await fetchGraphQL(
    `query {
      currentProjects: currentProjectsCollection(order: projectName_DESC) {
        items {
          sys { id }
          projectName
          slug
          projectDescription {
            json
          }
          projectLogo {
            fileName
          }
          teamMembersCollection {
            total
            items {
              fullName
            }
          }
        }
      }
    }`,
  );
  return entries?.data?.currentProjects?.items;
}

export async function getProjectsWithSlugs() {
  const res = await fetchGraphQL(
    `query {
      currentProjectsCollection(where: { slug_exists: true }) {
        items {
          projectName
          slug
          sys { id }
        }
      }
    }`,
  );
  return res?.data?.currentProjectsCollection.items;
}

export async function getProject(slug, preview = false) {
  const res = await fetchGraphQL(
    `query {
      currentProjectsCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        items {
          projectName
          projectDescription {
            json
          }
          requirements
          teamMembersCollection {
            total
            items {
              fullName
              role
              bio
            }
          }
        }
      }
    }`,
  );
  return res?.data?.currentProjectsCollection.items[0];
}

export async function getAboutContent() {
  const entry = await fetchGraphQL(
    `
      query {
        homepageCollection {
          items {
            teamPhoto {
              fileName
              contentType
              size
            }
            missionStatement {
              json
            }
          }
        }
      }
    `,
  );
  return {
    missionStatement:
      entry?.data?.homepageCollection?.items[0].missionStatement.json,
    teamPhoto: entry?.data?.homepageCollection?.items[0].teamPhoto,
  };
}

export async function getPublicationsAndCategories() {
  const res = await fetchGraphQL(
    `
      {
        publications: publicationsCollection(order: publicationTitle_ASC) {
          items {
            sys {
              id
            }
            publicationTitle
            description
            publicationCategoryCollection {
              items {
                categoryName
              }
            }
            file {
              url
            }
          }
        }
        categories: publicationCategoriesCollection(order: categoryName_ASC) {
          items {
            sys {
              id
            }
            categoryName
          }
        }
      }
    `,
  );
  return {
    publications: res?.data?.publications.items,
    categories: res?.data?.categories.items,
  };
}

export async function getCommunityEvents() {
  const res = await fetchGraphQL(
    `query {
      communityEventsCollection(order: sys_publishedAt_ASC) {
        items {
          eventName
          description
          sys {
            id
          }
        }
      }
    }`,
  );
  return res?.data?.communityEventsCollection?.items;
}

// ! Below are examples

const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
}
`;

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractPost(entry);
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
  preview ? 'true' : 'false'
}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
  preview ? 'true' : 'false'
}, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}
