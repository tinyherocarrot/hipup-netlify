const { parsed: localEnv } = require('dotenv');
const webpack = require('webpack');
const ALL_PROJECTS = require('./data/currentProjects.json');

const projectPaths = ALL_PROJECTS.map(({ fields: { projectName }, sys: { id } }) => ({
  projectName,
  id,
}));

module.exports = {
  webpack: (cfg) => {
    const res = { ...cfg };
    res.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      use: {
        loader: 'babel-loader',
      },
    });
    // res.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    res.node = { fs: 'empty' };
    return res;
  },

  // Create mapping of paths to (page) components to render
  // TODO: replace this with getStaticPaths (https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)
  exportPathMap: async () => {
    const pathMap = {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/publications': { page: '/PublicationsPage' },
      '/community': { page: '/community' },
    };

    // now, dynamically create parameterized paths
    projectPaths.forEach(({ projectName, id }) => {
      pathMap[`/projects/${projectName}`] = {
        page: '/project',
        query: { id },
      };
    });

    return pathMap;
  },
};
