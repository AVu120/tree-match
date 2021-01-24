import { render, screen } from "@testing-library/react";
import Question from "./Question";

const mockSetData = jest.fn();

test("Question component fully renders", () => {
  const mockData = { question: null, match: null };
  render(<Question data={mockData} setData={mockSetData} />);

  const title = screen.getByText(/Question 0/i);
  expect(title).toBeInTheDocument();
});

test("Question text and buttons render after receiving first api response", () => {
  const mockData = {
    question: {
      step_id: 1,
      question: "Do you have a courtyard, garden, or a farm?",
      answers: ["courtyard", "garden", "farm"],
    },
    match: null,
  };
  render(<Question data={mockData} setData={mockSetData} />);

  const title = screen.getByText(/Question 1/i);
  expect(title).toBeInTheDocument();

  const question = screen.getByText(
    /Do you have a courtyard, garden, or a farm?/i
  );
  expect(question).toBeInTheDocument();

  expect(screen.getAllByRole("button").length).toBe(3);
});
