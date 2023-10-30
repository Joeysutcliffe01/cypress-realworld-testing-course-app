describe("home page", () => {
  //?? ----------------------------------------------------- Hook
  //?? ----------------------------------------------------- beforeEach(() => {})

  //Ç If we are just testing on one url, we can use the beforeEach to state the url and only use it once inside describe
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  //?? ----------------------------------------------------- context()
  // ç This will allow us to group our test to a section and make it easier to read
  context("hero section", () => {
    //?? ----------------------------------------------------- 1st test

    //?? ----------------------------------------------------- .it()
    //ç Here we can say what we are testing for
    it("The h1 containes the correct test", () => {
      //?? ----------------------------------------------------- .visit()
      //ç Visit is used to locate the url we want to test
      // cy.visit("http://localhost:3000")

      //?? ----------------------------------------------------- .get()
      //Ç We can use the .get command to select a element. We should use the slecter inside the playground to select the element instead of using a tag, Eg..(h1, div, img)
      cy.get("[data-test='hero-heading']")
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    //?? ----------------------------------------------------- 2nd test

    //?? ----------------------------------------------------- .only()
    //ç If we have .only(), this will tell cypress to only run this test, and leave the rest
    it("The features in the home page are correct", () => {
      // cy.visit("http://localhost:3000")
      //?? ----------------------------------------------------- .eq()
      //Ç This is targeing the element, 0 based
      cy.get("dt").eq(0).contains("4 Courses")

      //?? ----------------------------------------------------- .contains()
      //Ç We just need to enter the information we are expecting as a string
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })

    context("Courses Section", () => {
      it.only("Course: Testing your first Next.js Application", () => {
        //?? ----------------------------------------------------- .find()
        // ç This will tell cypress to only look for an element that is inside another element, course-0 is the parent and we are telling it to find the a tags
        cy.getByData("course-0").find("a").eq(3).click()

        //?? ----------------------------------------------------- .location()
        // ç Location us used to get the pathname, once we have this we can make sure its bringing us to the right address
        cy.location("pathname").should("eq", "/testing-your-first-application")
      })
    })
  })
})
