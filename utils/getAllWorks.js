const axios = require("axios");
const matter = require("gray-matter");

const authHeader = require("./authHeader");
const { apiWorks } = require("./endpoints");

module.exports = async () => {
  const works = (await axios.get(`${apiWorks}`, { headers: authHeader })).data;

  const validWorks = works.filter(
    (work) => !work.name.startsWith("z-") && work.type === "dir"
  );

  const retArr = [];
  for await (let dir of validWorks) {
    const contents = (
      await axios.get(`${apiWorks}/${dir.name}`, { headers: authHeader })
    ).data;

    const hero = contents[0].download_url;
    const indexFile = (
      await axios.get(`${apiWorks}/${dir.name}/index.md`, {
        headers: authHeader,
      })
    ).data;

    const indexContent = Buffer.from(
      indexFile.content,
      indexFile.encoding
    ).toString("utf8");

    const { data } = matter(indexContent);
    const { title, tags, short } = data;

    const dirObj = {
      id: dir.name,
      title,
      description: short || null,
      hero,
      tags,
    };

    retArr.push(dirObj);
  }

  return retArr;
};
