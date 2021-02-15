require('dotenv').config({path: './.env'});
const trade = process.env.TRADE;
import {sendRequest} from '../../tradeRequests/functions';
// let result;
//
// before (
//     async () => {
//         result =  await sendRequest();
//     }
//
// )
//
// describe('First test', function () {
//     it('get value from response', function () {
//         expect(result.result.amount).to.equal(1)
//     });
// })


it('cy.request() with query parameters', () => {
    // will execute request
    // https://jsonplaceholder.cypress.io/comments?postId=1&id=3

    // cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
    //     userId: user.id,
    //     title: 'Cypress Test Runner',
    //     body: 'Fast, easy and reliable testing for anything that runs in a browser.',
    // })


    cy.request('POST', "http://51.195.100.110:18080", {


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

    })
        .its('body')
        .then((response) => {
            expect(response).property('status').to.equal(200) // new entity created
            expect(response).property('body').to.contain({
                result: 'Cypress Test Runner',
            })

            // we don't know the exact post id - only that it will be > 100
            // since JSONPlaceholder has built-in 100 posts
            expect(response.body).property('id').to.be.a('number')
                .and.to.be.gt(100)

            // we don't know the user id here - since it was in above closure
            // so in this test just confirm that the property is there
            expect(response.body).property('userId').to.be.a('number')
        })

})