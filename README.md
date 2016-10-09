Atlassian Bamboo Workflow for [Alfred 3](http://www.alfredapp.com)
==============================

<img src="https://github.com/codeBud7/boolf/blob/master/doc/screenshot.png">

Install
----------------
*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*
- Clone the project into an empty workflow
```
$ git clone https://github.com/codeBud7/boolf.git
```
- Adjust the config.json and add your bamboo server url and the basic auth credentials
```
{
  "url" : "bamboo.sample.com",
  "auth": "foo=="
}
```
- Run npm install
```
$ npm install
```

Key Combinations
----------------

Key Combination        | Action
---------------------- | ------
`enter`                | Open build plan in default browser

Related
----------------
- [alfy](https://github.com/sindresorhus/alfy) - Create Alfred workflows with ease
- [yeoman alfred generator](https://github.com/SamVerschueren/generator-alfred) - Scaffold out an Alfred workflow
- [Atlassian bamboo rest api](https://developer.atlassian.com/bamboodev/rest-apis/bamboo-rest-resources#BambooRESTResources-BuildService—AllBuilds) - Get the most out of your bamboo build server
- Icon made by Freepik from www.flaticon.com 
- Alfred [Dracula Theme](https://draculatheme.com/alfred/) Theme by [Zeno Rocha](https://zenorocha.com/)

License
----------------
MIT © [Sebastian Puskeiler](twitter.com/ebud7)
