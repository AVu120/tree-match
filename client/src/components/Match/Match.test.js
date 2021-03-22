import { fireEvent, render, screen } from "@testing-library/react";
import Match from "./Match";

const mockData = {
  question: null,
  match: {
    name: "Birch",
    description:
      "A bland pretty tree, suitable for someone who says no to everything!",
  },
};
const mockSetState = jest.fn();

test("Match component fully renders", () => {
  render(<Match data={mockData} setShownSection={mockSetState} />);

  const text = screen.getByText(
    /A bland pretty tree, suitable for someone who says no to everything!/i
  );
  expect(text).toBeInTheDocument();
});

test("Clicking restart button restarts the quiz.", () => {
  render(<Match data={mockData} setShownSection={mockSetState} />);

  const restartButton = screen.getByRole("button");
  fireEvent.click(restartButton);
  expect(mockSetState).toHaveBeenCalled();
});
