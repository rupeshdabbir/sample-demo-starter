/**
 * Start browserSync server
 */
'use strict';

const fs    = require('fs');

module.exports = function(options) {

  return () => {
    // If index.html exist - open it, else show folder
    let listDirectory = fs.existsSync(options.mainHtml) ? false : true;

    options.browserSync.init({
      notify: false,
      server: {
        baseDir: './',
        directory: listDirectory
      },
      snippetOptions: {
        // Provide a custom Regex for inserting the snippet
        rule: {
          match: /$/i,
          fn: (snippet, match) => snippet + match
        }
      },
      port: process.env.PORT || 8080
    });
  };

};