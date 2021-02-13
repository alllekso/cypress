import {sendRequest} from './tradeRequests/functions';

require('dotenv').config({path: './.env'});
// const sendRequest = require('./tradeRequests/functions').sendRequest
console.log(sendRequest())