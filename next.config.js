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
            '/contact': { page: '/contact' },
            '/p/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } },
            '/p/learn-nextjs': { page: '/post', query: { title: 'Learn Next.js is awesome' } },
            '/p/deploy-nextjs': { page: '/post', query: { title: 'Deploy apps with Zeit' } },
        }
    }
}