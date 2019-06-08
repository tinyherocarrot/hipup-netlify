require("dotenv").config()

const fs = require("fs")
const path = require("path")
const contentful = require("contentful")

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_TOKEN
})

const getcontent = async function() {
 
  const entries = await client.getEntries()
  const data = {}
  const items = entries.items

  items.forEach(item => {
    let contentType = item.sys.contentType.sys.id
    if (contentType in data) {
      data[contentType].push(item)
    } else {
      data[contentType] = Array(item)
    }
  })

  for (type in data) {
    fs.writeFileSync(
      path.join(__dirname, "..", "data", `${type}.json`),
      JSON.stringify(data[type])
    )
    // console.log("> Content gotten and written for", type)
  }
}

module.exports = {
  getcontent: getcontent
}

if (process.argv[2] === "install") {
  getcontent()
}
