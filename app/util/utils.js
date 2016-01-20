'use strict';
const getUrlFromTag = (tag) => {
  let first = tag.substr(tag.indexOf('http'), tag.length);

  return first.substr(0, first.indexOf("'"));
};

module.exports = {
  getUrlFromTag
};
