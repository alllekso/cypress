require('dotenv').config({path: './.env'});
const trade = process.env.TRADE;
const url = "http://51.195.100.110:18080";

const body = JSON.stringify({
    "method": "order.put_trade",
    "params": [
        1,
        "BTC_USDT",
        2,
        "1",
        "45005",
        "0",
        "0",
        "",
        false
    ],
    "id": 125

})

function putTrade() {
    return cy.request({
        method: 'POST',
        url: url,
        body: body
    }).then(response => {
        let jsonResponse = JSON.parse(response.body)
        return jsonResponse;
    })
}

describe("First test", () => {
    it('Send request', () => {
        putTrade().then(response => {
            expect(response.result.amount).to.equal("1")
        })
    })
})