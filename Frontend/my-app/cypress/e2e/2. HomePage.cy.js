describe("Home Page", () => {
  it("press buttons home page", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("[data-cy=email-input]").type("test@test.com");

    cy.get("[data-cy=password-input]").type("12345678");

    cy.get("[data-cy=login-button]").click();

    cy.url().should("include", "/");

    cy.get('[data-cy="pagination"]').then(($el) => {
      if ($el.length) {
        cy.get('[data-cy="pagination"]').find("li").eq(2).click();

        cy.get('[data-cy="pagination"]').find("li").eq(0).click();

        cy.get('[data-cy="pagination"]').find("li").eq(3).click();

        cy.get('[data-cy="pagination"]').find("li").eq(1).click();
      }
    });

    cy.get("[data-cy=add-showcase-button]").click();

    cy.url().should("include", "/create-showcase");

    cy.get("[data-cy=back-button]").click();

    cy.get("[data-cy=view-showcase-button]").click();

    cy.url().should("include", "/user-showcase");

    cy.get("[data-cy=back-button]").click();

    cy.url().should("include", "/");

    cy.get("[data-cy=logout-button]").click();
  });
});
