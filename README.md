_Update: Don't use these slow and complicated scripts. Try this simple [Hammerspoon script](https://github.com/Sangdol/hammerspoon-config/blob/master/quick_app.lua) instead._
---

Active App Memory JXA
===

_Do you use keyboard shortcuts to open applications?_

If the answer is yes, these scripts might interest you.

Story
===

I use [BetterTouchTool](https://folivora.ai/) to open applications via keyboard shortcuts. Sometimes, I want to open different applications depending on what I'm working on.

I wrote these scripts to dynamically designate which application I want to open using a keyboard shortcut.

Scripts
===

There are two scripts:

* `index.js`: a [JXA (JavaScript for Automation)](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/Introduction.html) script to store the currently running application's path
* `open-app.sh`: a bash script to launch the saved application

Installation
===

The `init.sh` script creates a hidden directory to store the application's path that I want to open via a shortcut.

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

If you run these scripts using keyboard shortcuts, you can open a dynamically selected application with a keyboard shortcut.

License
===

MIT
