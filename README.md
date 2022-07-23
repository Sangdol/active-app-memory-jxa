Active App Memory JXA
===

_Do you use keyboard shortcuts to open applications?_

If the answer is Yes, these scripts might be interesting for you.

Story
===

I use [BetterTouchTool](https://folivora.ai/) to open applications with keyboard shortcuts.
I sometimes want to open different applications with a shortcut depending on what I work on.

I wrote these scripts to dynamically designate the application that I want to open with a keyboard shortcut.

Scripts
===

There are two scripts:

* `index.js`: a [JXA(JavaScript for automation)](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/Introduction.html) script: to store the currently running application path
* `open-app.sh` a bash script: to launch the saved application

Installation
===

The `init.sh` script creates a hidden directory to store the application path that I want to open with a shortcut.

```bash
./scripts/init.sh
npm install
```

Usage
===

### Storing the current application

```sh
node $PROJECT_HOME/active-app-memory/index.js
```

### Opening the stored application

```sh
$HOME/projects/active-app-memory-jxa/scripts/open-app.sh
```

If you run these scripts with keyboard shortcuts, you can open a dynamically selected application with a keyboard shortcut.

License
===

MIT
