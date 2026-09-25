require("cypress-xpath");
import loginPages from "../../pages/loginPage";
import inventoryPage from "../../pages/inventoryPage";

describe("Saucedemo Web Test", function () {
  beforeEach(() => {
    cy.fixture("loginData").as("data");
    cy.fixture("productData").as("products");
    cy.visit()
    cy.env(["username", "password"]).then(({ username, password }) => {
            loginPages.login(username, password);
        });
  });

  afterEach(()=>{
    //cy.logout()
  })

  it("Add to Cart until checkout", function () {
    inventoryPage.verifyInventoryPage();
    // Add to cart 2 products
    inventoryPage.addProductToCart(products.productNames);

    // Verify products
    inventoryPage.verifyCartItemCount(products.productNames.length);

    //checkout test case + verify
  });

  it("Add to Cart with empty customer", function () {
     inventoryPage.verifyInventoryPage();
    // Add to cart 2 products
    inventoryPage.addProductToCart(products.productNames);

    // Verify products
    inventoryPage.verifyCartItemCount(products.productNames.length);

    //checkout page fill with empty customer
    //verify error message
      
  });
});
