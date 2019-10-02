import heapIdCookie from '../../utils/cookie';
describe('Cypress + Heap POC', function() {
  const appUrl = 'http://localhost:3000/';
  beforeEach(() => {
    cy.visit(appUrl);
    cy.setCookie(heapIdCookie.name, heapIdCookie.value);
  });

  for (let j = 0; j < 10; j++) {
    it('Should search multiple times', () => {
      const searchTerms = [
        'Max Cooper',
        'Erased Tapes',
        'BRUK',
        'hijmer',
        'Safer At Night',
        'Max Cooper',
        'Erased Tapes',
        'BRUK',
        'hijmer',
        'Safer At Night'
      ];
      const searchTerm = searchTerms[j];
      cy.visit(appUrl);
      cy.get('.btn--search-alt').click();
      cy.get('.search-form__input')
        .type(searchTerm)
        .type('{enter}');
      cy.url().should('include', '/search');
      cy.get('.content-header__title').should('contain', searchTerm);
    });
  }
});
