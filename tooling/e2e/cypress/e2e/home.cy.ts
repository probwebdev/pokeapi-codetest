describe('Test list and navigation', () => {
  it('Visits home page with pokemons list', () => {
    cy.visit('/');

    cy.get('[data-testid="pokemons-list"').children().should('have.length', 10);

    cy.get('[data-testid="pokemons-list-item"').should((items) => {
      expect(items[0]).to.contain('bulbasaur');
      expect(items[9]).to.contain('caterpie');
    });

    cy.get('[data-testid="next-page"]').click();

    cy.get('[data-testid="pokemons-list-item"').should((items) => {
      expect(items[0]).to.contain('metapod');
      expect(items[9]).to.contain('raticate');
    });
  });
});
