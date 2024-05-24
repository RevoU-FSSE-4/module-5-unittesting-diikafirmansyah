import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "./Dashboard";
import userEvent from "@testing-library/user-event";

describe("Dashboar Component", () => {
  test("Renders Dashboard Component", () => {
    render(<Dashboard />);

    const formElement = screen.queryByRole("form", {});
    expect(formElement).toBeDefined();

    const buttonElement = screen.getByRole("button", { name: "Submit" });
    userEvent.click(buttonElement);
    expect(buttonElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText("Pokemon Name");
    expect(inputElement).toBeDefined();
  });

  test("submit button for search pokemon corectly", () => {
    render(<Dashboard />);

    const pokemonInputName = screen.getByPlaceholderText("Pokemon Name");
    userEvent.type(pokemonInputName, "arbok");
    expect(pokemonInputName).toBeTruthy;

    const submitButtonElement = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButtonElement);
    expect(submitButtonElement).toBeTruthy();
  });
  test("fetching data debounced", async () => {
    render(<Dashboard />);

    const input = screen.getByPlaceholderText("Pokemon Name");
    userEvent.type(input, "zubat");

    const submitButton = await screen.findByText("Submit");

    userEvent.click(submitButton);

    
  });
});
