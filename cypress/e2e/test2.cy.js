describe('Validación de corrección de vulnerabilidad XSS', () => {

  it('No debe interpretar el HTML ingresado por el usuario', () => {

    cy.visit('http://localhost:3000');

    // Login
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123');
    cy.contains('button', 'Ingresar').click();

    // Crear tarea con HTML
    cy.get('#taskTitle').type('<h1>TAREA MALICIOSA</h1>');
    cy.contains('button', 'Crear tarea').click();

    // 1. El texto debe mostrarse literalmente, con las etiquetas visibles
    cy.get('#taskList')
      .should('contain.text', '<h1>TAREA MALICIOSA</h1>');

    // 2. NO debe existir un elemento H1 renderizado dentro de la lista
    cy.get('#taskList h1').should('not.exist');

  });

});