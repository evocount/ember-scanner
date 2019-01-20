/* jshint node:true */
// var RSVP = require('rsvp');

// For details on each option run `ember help release`
module.exports = {
  // local: true,
  // remote: 'some_remote',
  // annotation: "Release %@",
  // message: "Bumped version to %@",
  // manifest: [ 'package.json', 'bower.json', 'someconfig.json' ],
  // publish: true,
  // strategy: 'date',
  // format: 'YYYY-MM-DD',
  // timezone: 'America/Los_Angeles',
  //
  // beforeCommit: function(project, versions) {
  //   return new RSVP.Promise(function(resolve, reject) {
  //     // Do custom things here...
  //   });
  // }
  afterPush: function(project, versions) {
    runCommand('ember build --environment production');
    runCommand('ember github-pages:commit --message "Released ' + versions.next + '"');
    runCommand('git push origin gh-pages:gh-pages');
  },
};
