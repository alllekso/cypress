require('dotenv').config({path: './.env'});

// import {sendRequest} from './tradeRequests/functions';
const sendRequest = require('./tradeRequests/functions').sendRequest

async function run() {
    let result =  await sendRequest();
    console.log(result)
    console.log("test")
}
run()