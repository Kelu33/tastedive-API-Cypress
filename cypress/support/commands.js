
// -- TasteDive request command --
Cypress.Commands.add('TasteDive', (query) => {
    cy.request(
        `https://tastedive.com/api/similar?q=${query.type}:${query.name}`
    ).as('response')
})
