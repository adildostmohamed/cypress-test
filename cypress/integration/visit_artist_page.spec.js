import heapIdCookie from '../../utils/cookie';
describe('Cypress + Heap POC', function() {
  const appUrl = 'http://localhost:3000/';
  beforeEach(() => {
    cy.visit(appUrl);
    cy.setCookie(heapIdCookie.name, heapIdCookie.value);
  });

  for (let j = 0; j < 5; j++) {
    it('Artist page', function() {
      cy.visit(appUrl);
      cy.contains('Max Cooper').click();
      cy.url().should('include', '/users/79981/tracks');
    });
  }
});
