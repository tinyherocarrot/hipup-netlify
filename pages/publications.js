import React from "react"
import Head from "next/head"
import { withRouter } from "next/router"

import Layout from "../components/Layout"

const Publications = withRouter(({ router: { query: { title } } }) => {
  return (
    <Layout>
      <div className="publications-container">
        <aside className="categories">
          <p>
            <a>All Publications</a>
          </p>
          <p>
            <a>All Publications</a>
          </p>
          <p>
            <a>All Publications</a>
          </p>
          <p>
            <a>All Publications</a>
          </p>
        </aside>
        <div className="publications">
          <article>
            <h2>Publication No.1</h2>
            <p>Mariko Iwamoto, Tooru Nemoto</p>
            <p>19 May, 2017</p>
          </article>
          <article>
            <h2>Publication No.1</h2>
            <p>Mariko Iwamoto, Tooru Nemoto</p>
            <p>19 May, 2017</p>
          </article>
          <article>
            <h2>Publication No.1</h2>
            <p>Mariko Iwamoto, Tooru Nemoto</p>
            <p>19 May, 2017</p>
          </article>
          <article>
            <h2>Publication No.1</h2>
            <p>Mariko Iwamoto, Tooru Nemoto</p>
            <p>19 May, 2017</p>
          </article>
          <article>
            <h2>Publication No.1</h2>
            <p>Mariko Iwamoto, Tooru Nemoto</p>
            <p>19 May, 2017</p>
          </article>
          <article>
            <h2>Publication No.1</h2>
            <p>Mariko Iwamoto, Tooru Nemoto</p>
            <p>19 May, 2017</p>
          </article>
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
})

export default Publications
