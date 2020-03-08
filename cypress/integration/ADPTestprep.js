/// <reference types="Cypress"/>

import { LoginPage } from "./page-objects/LoginPage.js"
//var loginPage = require("./page-objects/LoginPage")

describe("Sample Test Script-change", ()=> {
    
    
    it("Logs in to the application-changed the description of this tes-edited it online", () => {
        const lp = new LoginPage() 
        
        cy.visit("http://eaapp.somee.com")

        lp.login();

        cy.get(lp.manageUser).should("contain", "admin")

    })

    it("Logs off the application", () => {
        const lp = new LoginPage()
        lp.logoff()

    })
})
