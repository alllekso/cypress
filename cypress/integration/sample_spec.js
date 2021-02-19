import {put_trade} from '../../consts'

const body = JSON.stringify(put_trade)

context('Trade Test', () => {
    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: Cypress.env('TRADE'),
            body: body
        }).then(r => JSON.parse(r.body).result).as('resp')
        cy.putTrade("180").then(r => r.body.result).as('a')


    })


    it('cy.request() - make an XHR request', function () {


        // let a = cy.putTrade("180")
        // console.log(a)

        const newBody = put_trade
        // newBody.params[4] = this.resp.amount
        console.log(this.a)

        cy.request({
            method: 'POST',
            url: Cypress.env('TRADE'),
            body: JSON.stringify(newBody)
        }).then(r => JSON.parse(r.body).result)
    })

    it('cy.request() - make an XHR request', function () {


        // let a = cy.putTrade("180")
        // console.log(a)

        const newBody = put_trade
        // newBody.params[4] = this.resp.amount
        console.log(this.a)

        cy.request({
            method: 'POST',
            url: Cypress.env('TRADE'),
            body: JSON.stringify(newBody)
        }).then(r => JSON.parse(r.body).result)
    })

})