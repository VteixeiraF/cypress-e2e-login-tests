class LoginPage {

  visitar() {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  }

  preencherEmail(email) {
    cy.get('.action-email')
      .clear()
      .type(email)
  }

  preencherSenha(senha) {
    cy.get('.action-password')
      .clear()
      .type(senha)
  }

  validarEmail(valorEsperado) {
    cy.get('.action-email')
      .should('have.value', valorEsperado)
  }

}

export default LoginPage
