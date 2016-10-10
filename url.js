'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

alfy.config.set('url', alfy.input);
