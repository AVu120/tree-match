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

describe("Check that the API responses are correct.", () => {
  describe("1. Do you have a courtyard, garden, or a farm?", () => {
    test("courtyard", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 1,
          answer: "courtyard",
        })
        .expect(200)
        .then((res: IResponseBody) => {
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
    test("garden", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 1,
          answer: "garden",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 5,
              question: "Do you want a fruiting tree?",
              answers: ["yes", "no"],
            },
            match: null,
          });
        });
    });
    test("farm", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 1,
          answer: "farm",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 8,
              question: "Do you want a fruiting tree?",
              answers: ["yes", "no"],
            },
            match: null,
          });
        });
    });
  });

  describe("2. Do you like cooking?", () => {
    test("yes", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 2,
          answer: "yes",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 3,
              question: "Do you like spicy food?",
              answers: ["yes", "no"],
            },
            match: null,
          });
        });
    });
    test("no", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 2,
          answer: "no",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 4,
              question: "How much do you like sweeping the courtyard?",
              answers: ["not at all", "seriously no I'm not playing here"],
            },
            match: null,
          });
        });
    });
  });

  describe("3. Do you like spicy food?", () => {
    test("yes", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 3,
          answer: "yes",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Curry leaf tree",
              description:
                "A small tree that's great for courtyards, from which leaves can be picked and added to any curry!",
            },
          });
        });
    });
    test("no", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 3,
          answer: "no",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Bay tree",
              description:
                "A robust small tree with small, fragrant, dark green leaves that are great for use in stews and curries.",
            },
          });
        });
    });
  });

  describe("4. How much do you like sweeping the courtyard?", () => {
    test("not at all", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 4,
          answer: "not at all",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Frangipani",
              description:
                "The marker of any gentrified inner-Sydney suburb. You'll have beautiful flowers all summer long!",
            },
          });
        });
    });
    test("seriously no I'm not playing here", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 4,
          answer: "seriously no I'm not playing here",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Plum blossom",
              description:
                "Has delicate pink flowers in spring, and is less effort to look after than a Frangipani.",
            },
          });
        });
    });
  });

  describe("5. Do you want a fruiting tree?", () => {
    test("yes", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 5,
          answer: "yes",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 6,
              question: "On a scale of 1-10, how much do you like citrus?",
              answers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            },
            match: null,
          });
        });
    });
    test("no", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 5,
          answer: "no",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Eucalyptus",
              description:
                "Australia's favourite, this dangerously flammable tree is home to the national animal: The Drop Bear.",
            },
          });
        });
    });
  });

  describe("6. On a scale of 1-10, how much do you like citrus?", () => {
    ["1", "2"].forEach((answer) =>
      test(`${answer}`, async () => {
        await request(app)
          .post("/api/answers")
          .send({
            step_id: 6,
            answer: `${answer}`,
          })
          .expect(200)
          .then((res: IResponseBody) => {
            expect(res.body).toEqual({
              question: null,
              match: {
                name: "Coconut palm",
                description:
                  "A tall tree that drops dangerously oversized drupes onto people's heads.",
              },
            });
          });
      })
    );

    ["3", "4"].forEach((answer) =>
      test(`${answer}`, async () => {
        await request(app)
          .post("/api/answers")
          .send({
            step_id: 6,
            answer: `${answer}`,
          })
          .expect(200)
          .then((res: IResponseBody) => {
            expect(res.body).toEqual({
              question: null,
              match: {
                name: "Apple tree",
                description: "The most basic and popular fruit tree!",
              },
            });
          });
      })
    );

    ["5", "6"].forEach((answer) =>
      test(`${answer}`, async () => {
        await request(app)
          .post("/api/answers")
          .send({
            step_id: 6,
            answer: `${answer}`,
          })
          .expect(200)
          .then((res: IResponseBody) => {
            expect(res.body).toEqual({
              question: {
                step_id: 7,
                question: "Are you an awesome cool person?",
                answers: ["yes", "no"],
              },
              match: null,
            });
          });
      })
    );

    ["7", "8"].forEach((answer) =>
      test(`${answer}`, async () => {
        await request(app)
          .post("/api/answers")
          .send({
            step_id: 6,
            answer: `${answer}`,
          })
          .expect(200)
          .then((res: IResponseBody) => {
            expect(res.body).toEqual({
              question: null,
              match: {
                name: "Kaffir lime",
                description:
                  "2 for the price of 1. Leaves are great in curries and stir fry, but also grows limes!",
              },
            });
          });
      })
    );

    test(`9`, async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 6,
          answer: `9`,
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 11,
              question: "How many pigs do you own?",
              answers: ["none", "some", "heaps"],
            },
            match: null,
          });
        });
    });

    test(`10`, async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 6,
          answer: `10`,
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Lemon tree",
              description: "The most prodigious fruiter of all the citrus!",
            },
          });
        });
    });
  });

  describe("7. Are you an awesome cool person?", () => {
    test("yes", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 7,
          answer: "yes",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Feijoa tree",
              description:
                "King of fruits, fruit of kings! Feijoas are the best fruit.",
            },
          });
        });
    });
    test("no", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 7,
          answer: "no",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Orange tree",
              description:
                "Is the fruit named for the colour or the colour named for the fruit?",
            },
          });
        });
    });
  });

  describe("8. Do you want a fruiting tree?", () => {
    test("yes", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 8,
          answer: "yes",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 9,
              question: "Are you an awesome cool person?",
              answers: ["yes", "no"],
            },
            match: null,
          });
        });
    });
    test("no", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 8,
          answer: "no",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 10,
              question: "Do you like cooking?",
              answers: ["yes", "no"],
            },
            match: null,
          });
        });
    });
  });

  describe("9. Are you an awesome cool person?", () => {
    test("yes", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 9,
          answer: "yes",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Feijoa tree",
              description:
                "King of fruits, fruit of kings! Feijoas are the best fruit.",
            },
          });
        });
    });
    test("no", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 9,
          answer: "no",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Apple tree",
              description: "The most basic and popular fruit tree!",
            },
          });
        });
    });
  });

  describe("10. Do you like cooking?", () => {
    test("yes", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 10,
          answer: "yes",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 11,
              question: "How many pigs do you own?",
              answers: ["none", "some", "heaps"],
            },
            match: null,
          });
        });
    });
    test("no", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 10,
          answer: "no",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: {
              step_id: 12,
              question: "Is there a river on your property?",
              answers: ["yes", "no"],
            },
            match: null,
          });
        });
    });
  });

  describe("11. How many pigs do you own?", () => {
    test("none", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 11,
          answer: "none",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Walnut tree",
              description:
                "A nut shaped like a miniature brain grows from this tree!",
            },
          });
        });
    });
    test("some", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 11,
          answer: "some",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Hazel",
              description:
                "Used for nutella and salads, and even known to habour truffles on the roots!",
            },
          });
        });
    });

    test("heaps", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 11,
          answer: "heaps",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Oak",
              description:
                "The acorns are a tasty treat for pigs, and truffles can be grown on the roots!",
            },
          });
        });
    });
  });

  describe("12. Is there a river on your property?", () => {
    test("yes", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 12,
          answer: "yes",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Willow",
              description:
                "A mysterious tree that loves water, mist, and witches.",
            },
          });
        });
    });
    test("no", async () => {
      await request(app)
        .post("/api/answers")
        .send({
          step_id: 12,
          answer: "no",
        })
        .expect(200)
        .then((res: IResponseBody) => {
          expect(res.body).toEqual({
            question: null,
            match: {
              name: "Birch",
              description:
                "A bland pretty tree, suitable for someone who says no to everything!",
            },
          });
        });
    });
  });
});

export {};
