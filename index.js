'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const host =  alfy.config.get('host');
const auth =  alfy.config.get('auth');

alfredNotifier();

var options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + auth
    }
};

alfy.fetch(host + '/rest/api/latest/plan?max-result=300', options).then(data => {
    const list = data['plans']['plan'];
    const items = alfy
        .matches(alfy.input, list, 'name')
        .map(x => ({
            title: x.name,
            subtitle: x.shortName,
            arg: host + '/browse/' + x.key
        }));

    alfy.output(items);
});
