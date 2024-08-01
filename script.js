describe('Holiday Destination Webpage Tests', () => {
    it('Should find the heading tag', () => cy.get('h1').should('be.visible'));
    
    it('Should find the paragraph tag', () => cy.get('p').should('be.visible'));
    
    it('Should find the ordered list tag', () => cy.get('ol').should('be.visible'));
    
    it('Should find the unordered list tag', () => cy.get('ul').should('be.visible'));
    
    it('Should find the strong tag', () => cy.get('strong').should('be.visible'));
    
    it('Should find the em tag', () => cy.get('em').should('be.visible'));
});
