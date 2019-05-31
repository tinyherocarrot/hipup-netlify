import client from "./client.js"

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
