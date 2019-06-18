import React, { useState } from "react"
import Head from "next/head"

import allPublications from "../data/publications.json"
import allCategories from "../data/publicationCategories.json"

const PublicationsView = () => {
  const [currentCategory, changeCategory] = useState("")
  // console.log(allPublications)
  // console.log(allCategories)
  return (
    <>
      <Head>
        <title>HIPUP | Publications</title>
      </Head>

      <div className="publications-container">
        <Categories
          currentCategory={currentCategory}
          changeCategory={changeCategory}
        />
        <Publications currentCategory={currentCategory} />
      </div>

      <style jsx>{`
        .publications-container {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-areas: "aside main main";
        }
      `}</style>
    </>
  )
}

export default PublicationsView

const Categories = ({ currentCategory, changeCategory }) => (
  <aside className="categories">
    <ul>
      <li>
        <a
          style={{
            borderBottom: currentCategory === "" ? "1px solid black" : ""
          }}
          onClick={() => changeCategory("")}>
          All Publications
        </a>
      </li>
      {allCategories
        .sort(
          (
            { fields: { categoryName: cat1 } },
            { fields: { categoryName: cat2 } }
          ) => {
            if (cat1 < cat2) {
              return -1
            } else if (cat1 > cat2) {
              return 1
            } else {
              return 0
            }
          }
        )
        .map(({ sys: { id }, fields: { categoryName } }) => (
          <li key={id}>
            <a
              style={{
                borderBottom:
                  currentCategory === categoryName ? "1px solid black" : ""
              }}
              onClick={() => changeCategory(categoryName)}>
              {categoryName}
            </a>
          </li>
        ))}
    </ul>
    <style jsx>{`
      li {
        list-style: none;
        margin-bottom: 1.2rem;
        cursor: pointer;
      }
      li:hover {
        opacity: 0.6;
      }
      .categories {
        height: 100%;
    width: 100%;
        overflow: hidden;
      }
      ul {
        width: 100%;
        height: 100%;
        text-align: left;
        overflow-y: scroll;
    padding: 0rem 3rem ; 
    box-sizing: content-box;

      }
    `}</style>
  </aside>
)

const Publications = ({ currentCategory }) => (
  <div className="publications">
    {allPublications
      .filter(({ fields: { publicationCategory } }) => {
        let categories = publicationCategory.map(c => c.fields.categoryName)
        return currentCategory ? categories.includes(currentCategory) : true
      })
      .sort()
      .map(
        ({
          sys: { id },
          fields: { publicationTitle, description, authors, file }
        }) => (
          <article key={id}>
            <a target="_blank" href={file.fields.file.url}>
              <h2>{publicationTitle}</h2>
            </a>
            <p>{description}</p>
            <p>{authors}</p>
          </article>
        )
      )}
    <style jsx>{`
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
    `}</style>
  </div>
)
