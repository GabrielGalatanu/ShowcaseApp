describe("Register and Login", () => {
  it("should register a new user and login", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("[data-cy=email-input]").type("test@test.com");

    cy.get("[data-cy=password-input]").type("12345678");

    cy.get("[data-cy=confirm-password-input]").type("12345678");

    cy.get("[data-cy=register-button]").click();

    cy.url().should("include", "/login");

    cy.get("[data-cy=email-input]").type("test@test.com");

    cy.get("[data-cy=password-input]").type("12345678");

    cy.get("[data-cy=login-button]").click();

    cy.url().should("include", "/");

    cy.get("[data-cy=logout-button]").click();

    cy.url().should("include", "/login");
  });
});
