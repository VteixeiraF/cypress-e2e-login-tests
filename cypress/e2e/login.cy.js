import LoginPage from '../pages/LoginPage'

describe('Login - Page Object Model', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visitar()
  })

  it('Deve preencher email corretamente', () => {
    loginPage.preencherEmail('teste@email.com')
    loginPage.validarEmail('teste@email.com')
  })

  it('Não deve aceitar email inválido', () => {
    loginPage.preencherEmail('email-invalido')
    loginPage.validarEmail('email-invalido')
  })

})
