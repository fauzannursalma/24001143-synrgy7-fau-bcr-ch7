// // FormInput.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import FormInput from "../../components/FormInput";

describe("FormInput Component", () => {
  const defaultProps = {
    id: "test-input",
    label: "Test Label",
    type: "text",
    placeholder: "Enter text...",
    value: "",
    onChange: jest.fn(),
  };

  test("renders the component with correct props", () => {
    render(<FormInput {...defaultProps} />);

    // Check if the label is rendered correctly
    const labelElement = screen.getByLabelText("Test Label");
    expect(labelElement).toBeInTheDocument();

    // Check if the input field is rendered with correct placeholder
    const inputElement = screen.getByPlaceholderText("Enter text...");
    expect(inputElement).toBeInTheDocument();

    // Check if the input field has the correct value
    expect(inputElement).toHaveValue(defaultProps.value);
  });

  test("calls onChange function when the input value changes", () => {
    render(<FormInput {...defaultProps} />);

    const inputElement = screen.getByPlaceholderText("Enter text...");
    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });
});
