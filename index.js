/**
 * This gets the POSIX path of the active application
 * and store it in the designated place.
 */
const runJxa = require('run-jxa');
const notify = require('osx-notifier');
const fs = require('fs');

const homedir = require('os').homedir();
const STORAGE_PATH = homedir + '/.sang_storage/active-app';

(async () => {
  function run() {
      var system = Application("System Events");

      // TODO where can I find reference of this?
      // https://forum.keyboardmaestro.com/t/how-to-use-jxa-with-system-events-app/6341/2
      var procs = system.processes.whose({ frontmost: {'=': true } })
      var procPath = procs[0].applicationFile().posixPath();

      return procPath;
  }

  const procPath = await runJxa(run);

  fs.writeFile(STORAGE_PATH, procPath, function (err) {
    if (err) {
      notify({
        type: 'fail',
        title: `Fail to save proc path.`,
        message: String(err),
        group: 'jxa'
      });
    } else {
      const msg = `'${procPath}' is saved at '${STORAGE_PATH}'.`;
      notify({
        type: 'pass',
        title: 'A new app path is saved.',
        message: msg,
        group: 'jxa'
      });
      console.log(msg);
   }
  });
})();
