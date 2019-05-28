// TODO: dynamically generate pathMap

module.exports = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            },
            {
                test: /\.js/,
                loader: 'import-glob'
            },
        )
        cfg.node = {fs: 'empty'}
        return cfg;
    },
    // exportPathMap: async (defaultPathMap) => {
		// 		const allProjects = await require("./content/_projects/*.md")
		// 		const projectPaths = allProjects.reduce((acc, curr) => {
		// 				const { title } = curr.attributes
		// 				const slug = title.replace(/\s+/g, '-').toLowerCase();
		// 				const path = {
		// 						[`project/${slug}`]: `{ page: '/project', query: { title: '${title}' } }`
		// 				}
		// 				return { ...acc, ...path }
		// 		}, {})
    //     return {
    //         '/': { page: '/' },
    //         '/projects': { page: '/allProjects', query: { title: 'Projects' } },
    //         '/publications': { page: '/publications', query: { title: 'Publications' }  },
    //         ...projectPaths
    //     }
    // }
}