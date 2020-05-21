const axios = require("axios");
const matter = require("gray-matter");

const authHeader = require("./authHeader");
const { apiWorks } = require("./endpoints");
const { isDetailFile, isImageOrVideo } = require("./checkers");

module.exports = async (id) => {
  const items = (await axios.get(`${apiWorks}/${id}`, { headers: authHeader }))
    .data;

  let objData = {};
  const images = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.name.startsWith("z-") || item.type !== "file") {
      continue;
    }

    if (i === 0 && isImageOrVideo(item.name)) {
      objData.hero = item.download_url;
    } else if (item.name === "index.md") {
      const indexFile = (
        await axios.get(item.download_url, { headers: authHeader })
      ).data;

      const { data, content } = matter(indexFile);
      objData = { ...objData, ...data, description: content.trim() };
    } else if (isImageOrVideo(item.name) && !isDetailFile(item.name)) {
      const imgObj = {
        url: item.download_url,
      };

      if (i < items.length - 1 && isDetailFile(items[i + 1].name)) {
        imgObj.detailUrl = items[i + 1].download_url;
      }

      images.push(imgObj);
    }
  }

  return {
    id,
    data: objData,
    content: images,
  };
};
