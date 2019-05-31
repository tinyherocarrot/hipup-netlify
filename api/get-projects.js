require("dotenv").config()
const contentful = require("contentful")

const options = {
  host: "preview.contentful.com",
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CPA_TOKEN // This is the preview token
}

// if (process.env.NODE_ENV === "production" && !process.env.STAGING) {
options.host = "https://cdn.contentful.com"
options.accessToken = process.env.CTF_CDA_TOKEN // This is the production token
// }

const client = contentful.createClient(options)

module.exports = {
  getAllEntries: async () => {
    const entries = await client.getEntries()
    console.log(entries.items)
  },
  getProjects: async () => {
    const entries = await client.getEntries({
      content_type: "project"
    })
    console.log(entries.items)
    return entries.items
  },
  getOneProject: async id => {
    const entry = await client.getEntry(id)
    console.log("ENTRY GETTEN:  ", entry)
    return entry
  },
  getProjectPaths: async () => {
    const allProjects = await client.getEntries({
      content_type: "project"
    })
    const projectPaths = allProjects.items.map(p => {
      const { projectName } = p.fields
      const { id } = p.sys
      return { projectName, id }
    })
    console.log("DICKS @@@@@@ ", projectPaths)
    return projectPaths
  }
}
