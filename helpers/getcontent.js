require('dotenv').config();

const fs = require('fs');
const path = require('path');
const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.wF4kzOown4LRvjprRWy1ro129ERIwtx1ky9EwuPwqmg,
});

const getcontent = async function () {
  const entries = await client.getEntries();
  const { items } = entries;
  const data = {};

  items.forEach((item) => {
    const contentType = item.sys.contentType.sys.id;
    if (contentType in data) {
      data[contentType].push(item);
    } else {
      data[contentType] = Array(item);
    }
  });

  for (type in data) {
    fs.writeFileSync(
      path.join(__dirname, '..', 'data', `${type}.json`),
      JSON.stringify(data[type]),
    );
  }
};

module.exports = {
  getcontent,
};

if (process.argv[2] === 'install') {
  getcontent();
}
