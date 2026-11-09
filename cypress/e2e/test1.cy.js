it('Debe mostrar la tarea creada', () => {
  cy.visit('http://localhost:3000');

  cy.get('#email').type('admin@test.com');
  cy.get('#password').type('123');

  cy.contains('Ingreso').click();

  cy.get('#taskTitle').type('Comprar leche');
  cy.contains('Crear tarea').click();

  cy.contains('Comprar leche').should('exist');
});