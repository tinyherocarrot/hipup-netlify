const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const projects = require('./data/currentProjects.json');

const projectPaths = projects.map((p) => ({
  projectName: p.fields.projectName,
  id: p.sys.id,
}));

// TODO: dynamically generate pathMap XML

module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
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
    cfg.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    cfg.node = { fs: 'empty' };
    return cfg;
  },

  exportPathMap: async (defaultPathMap) => {
    const pathMap = {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/publications': { page: '/PublicationsPage' },
      '/community': { page: '/community' },
    };

    // now get the dynamic stuff:
    projectPaths.map((p) => {
      pathMap[`/projects/${p.projectName}`] = {
        page: '/project',
        query: { id: p.id },
      };
    });

    return pathMap;
  },
};
