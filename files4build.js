/* The Arrays contains all libraries
   that are included in the 'build.js' call
   with 'npm run build'
*/
const getLibs4Build = function (pLibPath) {
  var vLibs4Build = [
    './src/npm_header.js',
    //pLibPath+'require_mods.js',
    pLibPath+'linkparam.js',
    pLibPath+'filesaver.js',
    pLibPath+'canvas2blob.js',
    pLibPath+'dom2id.js',
    pLibPath+'date_time.js',
    //pLibPath+'jszip.js',
    pLibPath+'loadfile4dom.js',
    pLibPath+'handlebars4code.js',
    //pLibPath+'handlebars_helpers.js',
    //'./src/npm_inherit.js',
    //pLibPath+'exportmod.js'
    './src/audioslides4web.js',
  ];
  return vLibs4Build;
};

const getHtml4Build = function (pPath) {
  var vArray = [
    pPath+'header.html',
    //'./src/html_title.html',
    pPath+'datajson.html',
    pPath+'headerlibs.html',
    pPath+'headerscript.html',
    pPath+'bodyheader.html',
    //'./src/html_description.html',
    pPath+'body.html',
    pPath+'bodytail.html',
    './src/html_tail.html',
    pPath+'tailscript.html',
    pPath+'tail.html'
  ];
  return vArray;
};

const getCss4Build = function (pPath) {
  var vArray = [
    pPath+'main.css'
  ];
  return vArray;
};


const getReadme4Build = function (pPath) {
  var vArray = [
    './src/readme_header.md',
    pPath+'headerintro.md',
    pPath+'doctoc.md',
    //'./src/readme_install.md',
    pPath+'usage.md',
    /*
    pPath+'handlebars4code.md',
    pPath+'headerlibs.md',
    pPath+'headerscript.md',
    pPath+'bodyheader.md',
    pPath+'body.md',
    pPath+'bodytail.md',
    */
    //pPath+'jsonschema.md',
    pPath+'build_process.md',
    pPath+'browserify.md',
    pPath+'acknowledgement.md',
    './src/readme_devlibs.md',
    './src/readme_tail.md',
    pPath+'tail.md'
  ];
  return vArray;
};

module.exports = {
  "getLibs4Build"   : getLibs4Build,
  "getHtml4Build"   : getHtml4Build,
  "getCss4Build"    : getCss4Build,
  "getReadme4Build" : getReadme4Build
};
