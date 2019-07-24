# HIPUP Website

## Overview
Build on Next, a React framework, and hosted on Netlify, and connected to Contentful CMS.

To start the development server, with hot module reloading:
```$ npm run dev```

To fetch the most recent content from Contentful: 
```$ npm run postinstall```

## Deployment
Netlify is set to automatically deploy with pushes to the GH repo, running the command `npm run export`. This triggers the `postinstall` command, the `build` command, and then the Next `export` command.

Updates to content on Contentful will also trigger a deploy on Netlify.