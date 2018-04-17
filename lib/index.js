const path = require('path');
const util = require('util');
const glob = util.promisify(require('glob'));
const readFile = util.promisify(require('fs').readFile);
const frontMatter = require('yaml-front-matter');

module.exports = async (baseDir) => {
  const models = {};
  for (let dir of await glob(`${baseDir}/*/`)) {
    const modelName = path.basename(dir);
    const articles = [];
    for (let md of await glob(`${dir}/*.md`)) {
      const data = frontMatter.loadFront(await readFile(md, 'utf8'), { contentKeyName: 'body' });
      data.id = path.basename(md, '.md');
      articles.push(data);
    }

    models[modelName] = articles;
  }

  return models;
}
