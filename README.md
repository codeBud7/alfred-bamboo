<img src="https://github.com/codeBud7/boolf/blob/master/doc/screenshot.png">

boolf - Atlassian Bamboo Workflow for Alfred
==============================

Prerequisites
----------------
You need [Node.js 4+](https://nodejs.org) and [Alfred 3](https://www.alfredapp.com) with the paid [Powerpack](https://www.alfredapp.com/powerpack/) upgrade.

Install
----------------
Install by npm
```
$ npm install -g boolf
```
Adjust the config.json placed in '/Users/{user}/Library/Application Support/Alfred 3/Workflow Data/com.codebud7.boolf/config.json'
```
{
  "host" : ["http://bamboo.sample.com"],
  "auth": "foo=="
}
```

Key Combinations
----------------

Key Combination        | Action
---------------------- | ------
`enter`                | Open build plan in default browser
`ctr`                | Open deploy plan in default browser
`cmd`                | Open branch overview in default browser

Related
----------------
- Create Alfred workflows with ease - [alfy](https://github.com/sindresorhus/alfy)
- Scaffold out an Alfred workflow - [yeoman alfred generator](https://github.com/SamVerschueren/generator-alfred)
- Get the most out of your bamboo build server - [Atlassian bamboo rest api](https://developer.atlassian.com/bamboodev/rest-apis/bamboo-rest-resources#BambooRESTResources-BuildService—AllBuilds)
- Icon made by Freepik from www.flaticon.com
- Alfred [Dracula Theme](https://draculatheme.com/alfred/) Theme by [Zeno Rocha](https://zenorocha.com/)
- Alfred workflow updater - [alfred-updater](https://github.com/SamVerschueren/alfred-updater)

License
----------------
MIT © [Sebastian Puskeiler](twitter.com/ebud7)
