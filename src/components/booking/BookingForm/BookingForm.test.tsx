import { render, screen, waitFor } from "../../../utils/tests-ts";
import userEvent from "@testing-library/user-event";
import BookingForm from ".";
import { submitAPI, fetchAPI, initializeTimes, updateTimes  } from "../../../utils/temp";

describe("BookingForm", () => {
  test("Renders labels and fields", () => {
    render(
      <BookingForm
        availableTimes={{
          times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        }}
        dispatch={jest.fn((action) => action)}
      />
    );
    // Date label and field
    const choseDateLabel = screen.getByText("Choose date");
    expect(choseDateLabel).toBeInTheDocument();
    const choseDateField = screen.getByTestId("res-date");
    expect(choseDateField).toBeInTheDocument();

    const choseTimeLabel = screen.getByText("Choose time");
    expect(choseTimeLabel).toBeInTheDocument();
    const choseTimeField = screen.getByTestId("res-time");
    expect(choseTimeField).toBeInTheDocument();

    const numberGuestLabel = screen.getByText("Number of guests");
    expect(numberGuestLabel).toBeInTheDocument();
    const numberGuestField = screen.getByTestId("guests");
    expect(numberGuestField).toBeInTheDocument();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
    const occasionField = screen.getByTestId("occasion");
    expect(occasionField).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("Validation fields - guests must be at least 1", async () => {
    const user = userEvent.setup();
    render(
      <BookingForm
        availableTimes={{
          times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        }}
        dispatch={jest.fn((action) => action)}
      />
    );

    const numberGuestField = screen.getByTestId("guests");
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    // Clear the field and set invalid value
    await user.clear(numberGuestField);
    await user.type(numberGuestField, "0");

    // Submit the form
    await user.click(submitButton);

    // Wait for validation error to appear
    await waitFor(() => {
      const errorMessage = screen.getByTestId("guests-error");
      expect(errorMessage).toHaveTextContent("Must be at least 1");
    });
  });

  test("Validation fields - guests must be at most 10", async () => {
    const user = userEvent.setup();
    render(
      <BookingForm
        availableTimes={{
          times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        }}
        dispatch={jest.fn((action) => action)}
      />
    );

    const numberGuestField = screen.getByTestId("guests");
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    // Set invalid value (greater than 10)
    await user.clear(numberGuestField);
    await user.type(numberGuestField, "11");

    // Submit the form
    await user.click(submitButton);

    // Wait for validation error to appear
    await waitFor(() => {
      const errorMessage = screen.getByTestId("guests-error");
      expect(errorMessage).toHaveTextContent("Must be at most 10");
    });
  });

  test("initializeTimes returns the correct expected value", () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
  });

  test("updateTimes returns the same state", () => {
    const state = {
      times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
    const action = { type: "SOME_ACTION", date: new Date() };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });

  test("submitAPI returns true", () => {
    const formData = {
      date: "2022-10-12",
      time: "20:00",
      guests: 5,
      occasion: "Birthday",
    };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });

});