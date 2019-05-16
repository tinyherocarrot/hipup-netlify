import React, { Component } from "react"
// import content from '../content/_pages/home.md';
import Layout from "../components/Layout"
import Link from "next/link"

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <section className="homepage-hero">
        <div className="homepage-hero-overlay">
          <h1>Health Intervention Projects for Underserved Populations</h1>
          <div>
            <button>Check out our work</button>
            <button>Explore past projects</button>
          </div>
        </div>
        <img
          className="homepage-hero-img"
          src="https://via.placeholder.com/400x150.png?text=Homepage+Hero+Image"
          alt=""
        />
      </section>
      <h1>Get Involved</h1>
      <section className="cards">
        {getPosts().map((post, i) => (
          <article className="card" key={i}>
            <img
              className="article-img"
              src="http://placekitten.com/305/205"
              alt=" "
            />
            <h2 className="article-title">
              <PostLink key={post.id} post={post} />
            </h2>
          </article>
        ))}
      </section>

      <style jsx>{`
        .homepage-hero {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .homepage-hero-img {
          width: 100vw;
          height: auto;
        }
        .homepage-hero-overlay {
          position: absolute;
          text-align: center;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          max-width: 960px;
          margin: 0 auto;
        }
        .card {
          flex: 0 0 calc(16.66% - 20px);
        }

        h1 {
          font-family: "Arial";
        }
      `}</style>
    </Layout>
  )
}

// export default class Index extends Component {
//   render() {
//     let { html , attributes:{ title, cats } } = content;
//     return (
//       <article>
//           <h1>{title}</h1>
//           <div dangerouslySetInnerHTML={{ __html: html }}/>
//           <ul>
//               { cats.map((cat, k) => (
//                   <li key={k}>
//                     <h2>{cat.name}</h2>
//                     <p>{cat.description}</p>
//                   </li>
//               ))}
//           </ul>
//       </article>
//     )
//   }
// }

// export default Index
