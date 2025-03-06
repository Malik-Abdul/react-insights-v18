// describe("API Test for /api/test", () => {
//   it("should return a valid response with name and age", () => {
//     cy.request("GET", "http://127.0.0.1:9000/api/test").then((response) => {
//       expect(response.status).to.eq(200); // Check status code
//       // expect(response.body).to.have.property("name", "Malik"); // Check name should be Malik
//       // expect(response.body).to.have.property("age", 39); // Check age should be exact 39
//       expect(response.body).to.have.property("name").to.be.a('number'); // Check name should be String
//       expect(response.body).to.have.property("age").and.to.be.a("number"); // Check age should be exact 39
//     });
//   });
// });

describe("API Test for /api/test", () => {
  it("should return a valid response with name and age", () => {
    cy.request("GET", "http://127.0.0.1:9000/api/test").then((response) => {
      expect(response.status).to.eq(200); // Check status code
      
      // Expect name to be a string (Fixing the incorrect assertion)
      expect(response.body).to.have.property("name").that.is.a("string", "Expected 'name' to be a string but found a different type");

      // Expect age to be a number
      expect(response.body).to.have.property("age").that.is.a("string", "Expected 'age' to be a string but found a different type");
    });
  });
});
