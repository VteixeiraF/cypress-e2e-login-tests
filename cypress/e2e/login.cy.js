describe('Login - Testes E2E', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.fixture('user').as('user')
  })

  it('Deve realizar login com sucesso', function () {
    cy.login(this.user.validUser.username, this.user.validUser.password)
    cy.contains('You logged into a secure area!').should('be.visible')
  })

  it('Não deve logar com credenciais inválidas', function () {
    cy.login(this.user.invalidUser.username, this.user.invalidUser.password)
    cy.contains('Your username is invalid!').should('be.visible')
  })

  it('Não deve permitir login com campos vazios', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('Your username is invalid!').should('be.visible')
  })

})
