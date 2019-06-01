const { parsed: localEnv } = require("dotenv").config()
const webpack = require("webpack")
// const { getProjectPaths } = require("./api/get-projects.js")
const projects = require("./data/project.json")
const projectPaths = projects.map(p => ({
  projectName: p.fields.projectName,
  id: p.sys.id
}))

// TODO: dynamically generate pathMap
module.exports = {
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    })
    cfg.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    cfg.node = { fs: "empty" }
    return cfg
  },
  //   serverRuntimeConfig: {
  //     // Will only be available on the server side
  //     mySecret: 'secret',
  //     secondSecret: process.env.SECOND_SECRET // Pass through env variables
  //   },
  //   publicRuntimeConfig: {
  //     // Will be available on both server and client
  //     staticFolder: '/static'
  //   },
  exportPathMap: async defaultPathMap => {
    const pathMap = {
      "/": { page: "/" },
      "/projects": { page: "/projects", query: { title: "Projects" } },
      "/publications": {
        page: "/publications",
        query: { title: "Publications" }
      }
    }

    // now get the dynamic stuff:
    // const projectPaths = await getProjectPaths()
    projectPaths.map(p => {
      pathMap[`/projects/${p.projectName}`] = {
        page: "/project",
        query: { id: p.id }
      }
    })

    return pathMap
  }
}
