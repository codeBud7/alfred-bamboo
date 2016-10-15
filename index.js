'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const Promise = require("bluebird");
const request = require('request-promise');

const hosts = alfy.config.get('hosts');
const auth = alfy.config.get('auth');

var requestList = [];
for (var host in hosts) {
	requestList.push({
		url: hosts[host] + '/rest/api/latest/plan?max-result=300',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Basic ' + auth,
			'Accept': 'application/json'
		},
		method: 'GET'
	});
}

Promise.map(requestList, function(obj) {
	return request(obj).then(function(body) {
		return JSON.parse(body);
	});
}).then(function(data) {
	var items = [];
	for (var entry in data) {
		const list = data[entry]['plans']['plan'];
		items = items.concat(alfy
			.matches(alfy.input, list, 'name')
			.map(x => ({
				title: x.name,
				subtitle: x.shortName,
				arg: x.link['href']
			})));
	}

	alfy.output(items);
}, function(err) {
	alfy.error(err);
});
