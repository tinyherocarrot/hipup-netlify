import client from "./client.js"

module.exports = {
  getPublications: async () => {
    const entries = await client.getEntries({
      content_type: "publications"
    })
    console.log(entries.items)
    return entries.items
  },
  getCategories: async () => {
    const entries = await client.getEntries({
      content_type: "publicationCategories"
    })
    console.log(entries.items)
    return entries.items
  }
}
