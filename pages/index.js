import React, { Component } from 'react'
// import content from '../content/_pages/home.md';
import Layout from '../components/Layout'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
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
        font-family: 'Arial';
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
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
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