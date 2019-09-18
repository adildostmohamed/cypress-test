describe('Cypress + Heap POC', function() {
  const appUrl = 'https://807d4832.ngrok.io'
  beforeEach(() => {
    cy.visit(appUrl)
  })

  it('Artist page', function() {
    cy.visit(appUrl)
    cy.contains('Max Cooper').click()
    cy.url().should('include', '/users/79981/tracks')
  })

  it('Finds search bar and enters text', function() {
    const searchTerm = "Erased Tapes"
    cy.visit(appUrl)
    cy.get('.btn--search-alt').click()
    cy.get('.search-form__input').type(searchTerm).type('{enter}')
    cy.url().should('include', '/search')
    cy.get('.content-header__title').should('contain', searchTerm)
  })

  it('Should search multiple times', () => {
    const loopCount = 5;
    const searchTerms = ['Max Cooper', 'Erased Tapes', 'BRUK', 'hijmer', 'Safer At Night', 'Max Cooper', 'Erased Tapes', 'BRUK', 'hijmer', 'Safer At Night']
    for(let i = 0; i < loopCount; i++) {
      const searchTerm = searchTerms[i]
      cy.visit(appUrl)
      cy.get('.btn--search-alt').click()
      cy.get('.search-form__input').type(searchTerm).type('{enter}')
      cy.url().should('include', '/search')
      cy.get('.content-header__title').should('contain', searchTerm)
    }
  })
})