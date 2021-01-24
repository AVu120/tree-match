import { render, screen, fireEvent } from "@testing-library/react";
import Introduction from "./Introduction";

test("Introduction component fully renders", () => {
  render(<Introduction />);

  const title = screen.getByText(/Welcome to TreeMatch!/i);
  expect(title).toBeInTheDocument();

  const text = screen.getByText(/Click start below/i);
  expect(text).toBeInTheDocument();
});

test("Clicking start button initializes quiz.", () => {
  const mockSetState = jest.fn();

  render(<Introduction setShownSection={mockSetState} />);

  const startButton = screen.getByRole("button");
  fireEvent.click(startButton);
  expect(mockSetState).toHaveBeenCalled();
});
