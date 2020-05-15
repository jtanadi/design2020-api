const isDetailFile = (filename) => {
  return /_detail\.(jpg|jpeg|png|gif|tif|tiff)$/.test(filename);
};

const isImageOrVideo = (file) => {
  return /\.(jpg|jpeg|png|gif|tif|tiff|mp4)$/.test(file);
};

module.exports = { isDetailFile, isImageOrVideo };
