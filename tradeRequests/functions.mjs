"use strict";
const fetch = require("node-fetch");
require('dotenv').config({path: '../.env'});

const trade = process.env.TRADE;


let body = {
    "method": "order.put_trade",
    "params": [
        1,
        "BTC_USDT",
        2,
        "1",
        "45001",
        "0",
        "0",
        "",
        false
    ],
    "id": 125
}

let init = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
}

async function asyncPostRequest(url = '', data = {}) {

    const response = await fetch(url, data);
    return response.json();
}

export async function sendRequest(){
    let result = await asyncPostRequest(trade, init)
        .then((data) => {
            return data;
        });
    console.log(result.result.amount);
    return result

}



// module.exports = {
//     sendRequest
// }


