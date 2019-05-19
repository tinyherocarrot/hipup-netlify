module.exports = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            }
        )
        return cfg;
    },
    exportPathMap: async (defaultPathMap) => {
        return {
            '/': { page: '/' },
            '/projects': { page: '/allProjects', query: { title: 'Projects' } },
            '/p/hello-nextjs': { page: '/project', query: { title: 'Hello Next.js' } },
            '/p/learn-nextjs': { page: '/project', query: { title: 'Learn Next.js is awesome' } },
            '/p/deploy-nextjs': { page: '/project', query: { title: 'Deploy apps with Zeit' } },
            '/publications': { page: '/publications' },
        }
    }
}