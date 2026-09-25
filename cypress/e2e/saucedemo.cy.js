describe('saucedemo login', () => {
  it('E2E Testing Saucedemo', () => {
    cy.visit('/')
    cy.get('[data-test="username"]')
      .should("be.visible")
      .type("standard_user");

    cy.get('[data-test="password"]')
      .should("be.visible")
      .type("secret_sauce");

    cy.get('[data-test="login-button"]')
      .click();

    // Login Verification
    cy.url()
      .should("include", "/inventory.html");

    cy.get(".title")
      .should("be.visible")
      .and("contain", "Products");

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