import React, { useState } from "react"
import Head from "next/head"

// import { getPublications, getCategories } from "../api/get-publications.js"
import allPublications from "../data/publications.json"
import allCategories from "../data/publicationCategories.json"

const Publications = () => {
  const [currentCategory, changeCategory] = useState("")
  console.log(allPublications)
  console.log(allCategories)
  return (
    <>
      <Head>
        <title>HIPUP | Publications</title>
      </Head>
      <div className="publications-container">
        <aside className="categories">
          <p>All Publications</p>
          {allCategories.map(category => (
            <p>{category.fields.categoryName}</p>
          ))}
        </aside>
        <div className="publications">
          {allPublications
            .filter(category =>
              currentCategory ? category.fields.categoryName === currentCategory : true
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
        .publications-container {
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
          border-left: 1px solid black;
          padding-left: 2rem;
        }
        h1 {
          text-align: left;
        }
        article {
          margin-bottom: 3rem;
        }
        article > p {
          font-weight: lighter;
        }
      `}</style>
    </>
  )
}

// Publications.getInitialProps = async () => {
//   const res = await getPublications()
//   const res2 = await getCategories()
//   const allPublications = res.map(p => p.fields)
//   const allCategories = res2.map(p => p.fields)
//   return { allPublications, allCategories }
// }

export default Publications
