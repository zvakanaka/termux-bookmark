Add bookmarks using the share menu on Android

# Instructions
1) Install [Termux](https://termux.com/)
2) Open Termux and issue the commands in the next steps
3) Update packages: `$ apt update && apt -y upgrade`
4) Install Node.js `$ apt install nodejs`
5) Install the [termux-bookmark npm package](https://www.npmjs.com/package/termux-bookmark): `$ npm i --global termux-bookmark`
6) Create the directory for the script that will run whenever a URL is shared using Termux: `$ mkdir ~/bin`
7) Create a script with `$ nano ~/bin/termux-url-opener` with the following contents:
```sh
#!/bin/bash
NPX_PATH=/data/data/com.termux/files/usr/bin/npx
BOOKMARK_URL=$1

env BOOKMARK_SERVER_ROOT=https://<your-bookmark-server> $NPX_PATH bookmark $BOOKMARK_URL

termux-notification --title "Bookmarked" --content "$url"

exit
```
8) Mark the script as executable: `$ chmod +x ~/bin/termux-url-opener`
9) Install the [Termux API](https://wiki.termux.com/wiki/Termux:API)

You can now use the Android share menu to add bookmarks to your [bookmark-server](https://github.com/zvakanaka/bookmark-server)
