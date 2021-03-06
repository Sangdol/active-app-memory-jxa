# Open an application with a shortcut

This is a small project composed of two scripts:

* a [JXA(JavaScript for automation)](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/Introduction.html) script: to store the currently running application path
* a bash script: to launch the saved application

I've created these scripts to open applications with a shortcut with [Better Touch Tool](https://folivora.ai/).

## Installation

```bash
./scripts/init.sh
npm install
```

## Usage

```bash
# To run the JXA script to save the active application path.
node $PROJECT_HOME/active-app-memory/index.js

# To run a bash script to open the saved application path.
$HOME/projects/active-app-memory-jxa/scripts/open-app.sh
```
