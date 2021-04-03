const request = require("supertest");
const app = require("../app");

interface IResponseBody {
  body: {
    question: {
      step_id: number;
      question: string;
      answers: string[];
    } | null;
    match: { name: string; description: string } | null;
  };
}

describe("Begin quiz", () => {
  test("GET /begin", async () => {
    const expectedResponseBody = {
      question: {
        step_id: 1,
        question: "Do you have a courtyard, garden, or a farm?",
        answers: ["courtyard", "garden", "farm"],
      },
      match: null,
    };

    await request(app)
      .get("/api/begin")
      .expect(200)
      .then((res: IResponseBody) => {
        expect(res.body).toEqual(expectedResponseBody);
      });
  });
});

export {};
