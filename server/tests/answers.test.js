const request = require("supertest");
const app = require("../app");

describe("Answer questions:", () => {
  describe("Do you have a courtyard, garden, or a farm?", () => {
    test("Courtyard", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 1,
          answer: "courtyard",
        })
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual({
            question: {
              step_id: 2,
              question: "Do you like cooking?",
              answers: ["yes", "no"],
            },
            match: null,
          });
        });
    });
  });
});
