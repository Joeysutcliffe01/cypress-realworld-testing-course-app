describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  //?? ----------------------------------------------------- 1st test
  it("Allows users to subscribe to email list", () => {
    //?? ----------------------------------------------------- .type()
    // Ç egtByData is a custom hook, this will select the field we select and type() will allow us to type into a input files
    cy.getByData("email-input").type("Joey@gmail.com")

    //?? ----------------------------------------------------- .click()
    // ç We can select the submit btn with our custom hooj and we can click it with .click()
    cy.getByData("submit-button").click()

    //?? ----------------------------------------------------- .should("exist")
    // Ç This is saying that the message we selected should "exist"
    cy.getByData("success-message").should("exist").contains("Joey@gmail.com")
  })

  //?? ----------------------------------------------------- 2nd test

  it("Does not allow an invalid email address", () => {
    cy.getByData("email-input").type("joey")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  //?? ----------------------------------------------------- 3rd test
  it("User already subscribed", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message").contains(" already exists")
  })
})
