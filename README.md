# Remeber the current application to open it later

This is a small project composed of a [JXA](JavaScript for automation) script and a bash script with which you can store the currently running application path and run it.

I've created this to launch or open a selected application with a shortcut, and I use these script with [Better Touch Tool](https://folivora.ai/).

## Installation

```sh
./scripts/init.sh
npm install
```

## Launch scripts

```
# To run the JXA script to save the active application path.
node $PROJECT_HOME/active-app-memory/index.js

# To run a bash script to open the saved application path.
$HOME/projects/active-app-memory-jxa/scripts/open-app.sh
```
