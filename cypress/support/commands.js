
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('putTrade', (price = "10000") => {
    cy.request({
        method: 'POST',
        url: Cypress.env('TRADE'),
        body: {
            "method": "order.put_trade",
            "params": [
                1,
                "BTC_USDT",
                2,
                "1",
                price,
                "0",
                "0",
                "",
                false
            ],
            "id": 125
        }
    })

})

Cypress.Commands.add('logout', () => {
    cy.window().its('localStorage')
        .invoke('removeItem', 'session')

    cy.visit('/login')
})


