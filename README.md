
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

Usage
----------------
<img src="https://github.com/codeBud7/alfred-bamboo/blob/master/doc/host-config.png">
Configure the host config of your bamboo.
You have to adjust the config file manually at the moment. You can find the file at "~/Library/Application Support/Alfred 3/Workflow Data/com.codebud7.alfred-bamboo". Just transform the host config into a list like "hosts":["bamboo.foo.it", "bamboo.foo.com"]

<img src="https://github.com/codeBud7/alfred-bamboo/blob/master/doc/auth-config.png">
Configure the authentication to your bamboo.

<img src="https://github.com/codeBud7/alfred-bamboo/blob/master/doc/workflow.png">
Find your build plans.

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
