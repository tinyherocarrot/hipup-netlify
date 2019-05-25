import React from "react"
import Head from "next/head"
import { withRouter } from "next/router"
import allEntries from "../content/_publications/*.md"
// import dynamic from "next/dynamic"
// import glob from "glob"

// const allEntries = glob.sync("**/content/_publications/*.md"); 
console.log('all entries', allEntries)

// import requireContext from "require-context"
// const allEntries = require.context("../content/_publications", true, /\.md$/)
// console.log(allEntries.keys()) // all the files found in the context
// allEntries.keys().forEach(allEntries) // require them all
// function importAll (r) {
//   r.keys().forEach(r);
// }

// importAll(require.context('../static/img', true, /\.pdf$/));
import Layout from "../components/Layout"

const Publications = withRouter(({ router: { query: { title } }, ...props }) => {
  console.log(props)
  return (
    <Layout>
      <Head>
        <title>HIPUP | {title}</title>
      </Head>
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
          {/* {this.props} */}
          {/* <article>
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
          </article> */}
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

Publications.getInitialProps = async () => {
  // const r = require.context("../content/_publications", true, /\.md$/)
  // const content = allEntries.map(e => require(e));
return  {}
}

export default Publications
