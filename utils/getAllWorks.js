const fetch = require("isomorphic-unfetch");
const matter = require("gray-matter");

const authHeader = require("./authHeader");
const { apiWorks } = require("./endpoints");

module.exports = async () => {
  const works = await (
    await fetch(`${apiWorks}`, { headers: authHeader })
  ).json();

  const validWorks = works.filter(
    (work) => !work.name.startsWith("z-") && work.type === "dir"
  );

  const retArr = [];
  for await (let dir of validWorks) {
    const contents = await (
      await fetch(`${apiWorks}/${dir.name}`, { headers: authHeader })
    ).json();

    const hero = contents[0].download_url;
    const indexFile = await (
      await fetch(`${apiWorks}/${dir.name}/index.md`, { headers: authHeader })
    ).json();

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
