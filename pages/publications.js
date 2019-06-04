import React, { useState } from "react"
import Head from "next/head"

import allPublications from "../data/publications.json"
import allCategories from "../data/publicationCategories.json"

const Publications = () => {
  const [currentCategory, changeCategory] = useState("")
  // console.log(allPublications)
  // console.log(allCategories)
  return (
    <>
      <Head>
        <title>HIPUP | Publications</title>
      </Head>
      <div className="publications-container">
        <aside className="categories">
          <ul>
            <li>
              <a onClick={() => changeCategory("")}>All Publications</a>
            </li>
            {allCategories.map(category => (
              <li key={category.sys.id}>
                <a onClick={() => changeCategory(category.fields.categoryName)}>
                  {category.fields.categoryName}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="publications">
          {allPublications
            .filter(category =>
              currentCategory
                ? category.fields.categoryName === currentCategory
                : true
            )
            .map(p => (
              <article key={p.sys.id}>
                <a target="_blank" href={p.fields.file.fields.file.url}>
                  <h2>{p.fields.publicationTitle}</h2>
                </a>
                <p>{p.fields.description}</p>
                <p>{p.fields.authors}</p>
              </article>
            ))}
        </div>
      </div>

      <style jsx>{`
        li {
          list-style: none;
          margin-bottom: 1.2rem;
          cursor: pointer;
        }
        .publications-container {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-areas: "aside main main";
        }
        .categories {
          text-align: right;
          padding-right: 2rem;
          overflow: scroll;
        }
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
    </>
  )
}

export default Publications
