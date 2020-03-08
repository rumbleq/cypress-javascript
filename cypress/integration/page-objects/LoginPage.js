export class LoginPage {

constructor() {
    this.userName = "#UserName"
    this.password = "#Password"
    this.loginBtn = ".btn"
    this.manageUser = "[title='Manage']"
    this.logoffBtn = "Log off"
} 
    login() {
        cy.contains("Login").click()

        cy.url().should("include", "/Account/Login")

        cy.get(this.userName).type("admin")
        cy.get(this.password).type("password")
        cy.get(this.loginBtn).click()
    }

    logoff() {
        cy.contains(this.logoffBtn).click()
    }
}
