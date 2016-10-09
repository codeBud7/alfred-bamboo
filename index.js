'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

var config = require('./config.json');
var options = {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
	'Authorization': 'Basic ' + config.auth
    }
};

alfy.fetch(config.url + '/rest/api/latest/plan?max-result=300', options).then(data => {
  const list = data['plans']['plan'];
  const items = alfy
        .matches(alfy.input, list, 'name')
        .map(x => ({
            title: x.name,
            subtitle: x.shortName,
            arg: 'https://bamboo.mytaxi.com/browse/' + x.key
        }));
  
  alfy.output(items);
});
