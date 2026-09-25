import loginPages from "../../pages/loginPages";

describe('saucedemo login', () => {
  let users;

  // Hook before, run sekali sebelum running test case
  // Menyiapkan data test
  before(()=>{
    cy.fixture("loginData").then((data)=>{
      users = data;
    }),
    cy.log("Starting log...")
  })

  beforeEach(()=>{
    // Open login page
    loginPages.visit()
  })

  after(()=>{
    cy.log("Test finished..."),
    cy.screenshot("after-test")
  })

  afterEach(()=>{
    // memanggil function logout
    // verify login success or failed
  })

  //Scenario Login

  it('Login with valid user', () => {
    // Login with data 
    loginPages.login(users.validUser.username, users.validUser.password)
    // Verify Login Success
    loginPages.verifyLoginSuccess("/inventory.html", "Products")
  }),

  it('Login with invalid user', () => { 
    // Login with data 
    loginPages.login(users.invalidUser.username, users.invalidUser.password)
    // Verify Login Error
    loginPages.verifyLoginError(users.invalidUser.errorMsg)
  }),

  it('Login with locked out user', () => {
    // Login with data 
    loginPages.login(users.lockedOutUser.username, users.lockedOutUser.password)
    // Verify Login Failed
    loginPages.verifyLoginError(users.invalidUser.errorMsg)
  })

})