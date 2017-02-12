
Handle your Atlassian Bamboo build plans with Alfred.
==============================

Prerequisites
----------------
You need to install [Node.js 4+](https://nodejs.org) and [Alfred 3](https://www.alfredapp.com).

Install
----------------
[![NPM](https://nodei.co/npm/alfred-bamboo.png)](https://nodei.co/npm/alfred-bamboo/)

```
$ npm install -g alfred-bamboo
```

Adjust the config.json placed in '~/Library/Preferences/alfy-nodejs/config.json'
(Alfred 3 config could be possible located here '/Users/{user}/Library/Application Support/Alfred 3/Workflow Data/com.codebud7.boolf')
```
{
  "hosts" : ["http://bamboo.sample.com"],
  "auth": "foo=="
}
```

Usage
----------------
<img src="https://github.com/codeBud7/alfred-bamboo/blob/master/doc/screenshot.png">
Find your build plan faster than ever.

Key Combination        | Action
---------------------- | ------
`enter`                | Open build plan in default browser
`ctrl`                | Open deploy plan in default browser
`cmd`                | Open branch overview in default browser

Related
----------------
- Create Alfred workflows with ease - [alfy](https://github.com/sindresorhus/alfy)
- Scaffold out an Alfred workflow - [yeoman alfred generator](https://github.com/SamVerschueren/generator-alfred)
- Get the most out of your bamboo build server - [Atlassian bamboo rest api](https://developer.atlassian.com/bamboodev/rest-apis/bamboo-rest-resources#BambooRESTResources-BuildService—AllBuilds)
- Icon made by Freepik from www.flaticon.com
- Alfred workflow updater - [alfred-updater](https://github.com/SamVerschueren/alfred-updater)

License
----------------
MIT © [Sebastian Puskeiler](https://twitter.com/ebud7)
