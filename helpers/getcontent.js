require("dotenv").config()

const fs = require("fs")
const path = require("path")
const contentful = require("contentful")

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_TOKEN
})

const types = [
  "homepage",
  "project",
  "publications",
  "publicationCategories",
  "teamMember"
]

const getcontent = async function() {
  console.log("> Starting import...")
  for (const type of types) {
    console.log(" > getting content for ", type)
    const entries = await client.getEntries({
      content_type: type,
      include: 3
    })

    const items = entries.items
    fs.writeFileSync(
      path.join(__dirname, "..", "data", `${type}.json`),
      JSON.stringify(items)
    )
    console.log("> Content gotten and written for", type)
  }
}

module.exports = {
  getcontent: getcontent
}

if (process.argv[2] === "install") {
  getcontent()
}
