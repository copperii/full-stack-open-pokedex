describe('e2e', function () {
  it('using a link works', function () {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu').click()
    cy.contains('pikachu')
    cy.contains('static')
    cy.contains('lightning rod')
  })
})
