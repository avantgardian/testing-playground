describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/contact.html')
  })

  it('should display all form fields', () => {
    // Check name input
    cy.get('#name')
      .should('be.visible')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'placeholder', 'Your name')
      .and('have.prop', 'required', true)

    // Check email input
    cy.get('#email')
      .should('be.visible')
      .and('have.attr', 'type', 'email')
      .and('have.attr', 'placeholder', 'your@email.com')
      .and('have.prop', 'required', true)

    // Check message textarea
    cy.get('#message')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Your message...')
      .and('have.prop', 'required', true)

    // Check submit button
    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('have.text', 'Submit')

    // Check reset button
    cy.get('button[type="reset"]')
      .should('be.visible')
      .and('have.text', 'Clear')
  })

  it('should have working navigation links', () => {
    // Check Contact link
    cy.contains('a', 'Contact')
      .should('have.attr', 'href', 'contact.html')
      .click()
    cy.url().should('include', 'contact.html')

    // Check Home link
    cy.contains('a', 'Home')
      .should('have.attr', 'href', 'index.html')
      .click()
    cy.url().should('include', 'index.html')
  })
}) 