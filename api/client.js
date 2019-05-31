require("dotenv").config()
const contentful = require("contentful")

const options = {
  host: "preview.contentful.com",
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CPA_TOKEN // This is the preview token
}

// if (process.env.NODE_ENV === "production" && !process.env.STAGING) {
options.host = "cdn.contentful.com"
options.accessToken = process.env.CTF_CDA_TOKEN // This is the production token
// }

const client = contentful.createClient(options)

export default client