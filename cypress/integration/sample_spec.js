import {put_trade} from '../../consts'

const body = JSON.stringify(put_trade)

context('Trade Test', () => {
    before(() => {
        cy.request({
            method: 'POST',
            url: Cypress.env('TRADE'),
            body: body
        }).then(r => JSON.parse(r.body).result).as('resp')
    })



    it('cy.request() - make an XHR request', function() {
        const newBody = put_trade
        newBody.params[4] = this.resp.amount

        cy.request({
            method: 'POST',
            url: Cypress.env('TRADE'),
            body: JSON.stringify(newBody)
        }).then(r => JSON.parse(r.body).result)
    })
})