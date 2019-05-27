import React, { useState } from "react"
import Head from "next/head"
import { withRouter } from "next/router"

import Layout from "../components/Layout"
import allEntries from "../content/_publications/*.md"
// console.log("all entries", allEntries)

const Publications = withRouter(
  ({
    router: {
      query: { title }
    },
    ...props
  }) => {
    const [currentCategory, changeCategory] = useState("")
    
    return (
      <Layout>
        <Head>
          <title>HIPUP | {title}</title>
        </Head>
        <div className="publications-container">
          <aside className="categories">
            <p>All Publications</p>
            {allEntries.map(category => (
              <p>{category.attributes.title}</p>
            ))}
          </aside>
          <div className="publications">
            {allEntries
              .filter(category =>
                currentCategory ? category === currentCategory : true
              )
              .reduce((a, c) => {
                const publications = c.attributes.publications.map(p => (
                  <article>
                    <h2>{p.title}</h2>
                    <p>{p.publication_description}</p>
                    <p>{p.publication_file}</p>
                  </article>
                ))
                return [...a, ...publications]
              }, [])}
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
      </Layout>
    )
  }
)

export default Publications
