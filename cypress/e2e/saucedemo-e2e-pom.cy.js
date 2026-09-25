import loginPages from "../pages/loginPages";

describe('saucedemo login', () => {
  it('E2E Testing Saucedemo', () => {

    // Sudah menggunakan POM
    // Open login page
    loginPages.visit()

    // Login hardcore
    //loginPages.login("standard_user", "secret_sauce")

    // Login dengan env variable di cypress 15
    //loginPages.login(Cypress.env("username"), Cypress.env("password"))

    // Login dengan env variable di cypress 16+
    cy.env(["username", "password"]).then(({ username, password }) => {
        loginPages.login(username, password);
    });

    // Verify Login Success
    loginPages.verifyLoginSuccess("/inventory.html", "Products")
    

    // Belum menggunakan POM

    // Inventory List Page -> Add to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]')
      .should("be.visible")
      .and("contain", "1");

    cy.get('[data-test="shopping-cart-link"]').click()

    // Verifikasi Page Cart.html
    cy.url().should("include", "/cart.html");
    cy.get('[data-test="checkout"]').click()

    // Checkout Information
    cy.get('[data-test="firstName"]').type("Maya")
    cy.get('[data-test="lastName"]').type("Maulani")
    cy.get('[data-test="postalCode"]').type("12345")
    cy.get('[data-test="continue"]').click()
    
    // Checkout Overview
    // Add verification data
    cy.get('[data-test="finish"]').click()

    // Checkout Complete Page
    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("contain", "Thank you for your order");
  });

})