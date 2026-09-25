import loginLocators from "../locators/loginLocators";

class LoginPage {
    visit(){
        cy.visit('/')
    }

    fillForm(locator, text) {
        cy.get(locator).should("be.visible").clear().type(text)
    }

    clickItem(locator){
        cy.get(locator).click();
    }

    login(username, password) {
        this.fillForm(loginLocators.username, username)
        this.fillForm(loginLocators.password, password)
        this.clickItem(loginLocators.login_btn)
    }

    verifyURL(expectedURL) {
        cy.url().should("include",expectedURL);
    }

    verifyLoginSuccess(expectedURL, expectedText) {
        cy.url().should("include", expectedURL);
        cy.get(".title").should("be.visible").and("contain", expectedText);
    }

    verifyLoginError(expectedText) {
        cy.get('[data-test="error"]').should("be.visible").and("contain", expectedText);
    }
}

export default new LoginPage()