const isDetailFile = (filename) => {
  return /_detail\.(jpg|jpeg|png|gif|tif|tiff)$/.test(filename);
};

const isImage = (file) => {
  return /\.(jpg|jpeg|png|gif|tif|tiff)$/.test(file);
};

module.exports = { isDetailFile, isImage };
