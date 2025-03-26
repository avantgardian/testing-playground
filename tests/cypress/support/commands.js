// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to visit a local file
Cypress.Commands.add('visitLocalFile', (path) => {
  cy.visit(path)
})

// Custom command to check if an element is visible and has correct text
Cypress.Commands.add('shouldBeVisibleWithText', { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject)
    .should('be.visible')
    .and('have.text', text)
}) 