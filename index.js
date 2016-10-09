'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

var options = {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
	'Authorization': 'Basic {user:password}'
    }
};

alfy.fetch('bamboo.api.com/rest/api/latest/plan?max-result=300', options).then(data => {
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
