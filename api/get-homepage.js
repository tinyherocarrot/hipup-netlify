const client = require("./client.js")

module.exports = {
  getHomepage: async () => {
    const entries = await client.getEntries({
      content_type: "homepage"
    })
    // console.log(entries.items)
    return entries.items
  },
}
