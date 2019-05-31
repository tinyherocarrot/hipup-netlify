const { parsed: localEnv } = require("dotenv").config()
const webpack = require("webpack")
const { getProjectPaths } = require("./api/get-projects.js")

// TODO: dynamically generate pathMap
module.exports = {
  webpack: cfg => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        use: "frontmatter-markdown-loader"
      },
    )
    cfg.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    cfg.node = { fs: "empty" }
    return cfg
  },
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
    const projectPaths = await getProjectPaths()
    projectPaths.map(p => {
      pathMap[`/projects/${p.projectName}`] = {
        page: "/project",
        query: { id: p.id }
      }
    })

    return pathMap
  }
}
