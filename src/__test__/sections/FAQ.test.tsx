import { render, fireEvent } from "@testing-library/react";
import { FAQ } from "../../sections/FAQ";

describe("FAQ Component", () => {
  test("renders FAQ section correctly", () => {
    const { getByText } = render(<FAQ />);

    // Check if the FAQ section heading is rendered correctly
    const headingElement = getByText(/Frequently Asked Question/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Frequently Asked Question");
    expect(headingElement).toHaveClass("text-2xl");
    expect(headingElement).toHaveClass("font-bold");

    // Check if the FAQ questions are rendered correctly
    const firstQuestion = getByText(/Apa saja syarat yang dibutuhkan\?/i);
    expect(firstQuestion).toBeInTheDocument();

    const secondQuestion = getByText(
      /Berapa hari minimal sewa mobil lepas kunci\?/i
    );
    expect(secondQuestion).toBeInTheDocument();

    const thirdQuestion = getByText(
      /Berapa hari sebelumnya sabaiknya booking sewa mobil\?/i
    );
    expect(thirdQuestion).toBeInTheDocument();

    const fourthQuestion = getByText(/Apakah Ada biaya antar-jemput\?/i);
    expect(fourthQuestion).toBeInTheDocument();
  });

  test("toggles answer visibility on checkbox click", () => {
    const { getByTestId } = render(<FAQ />);

    // Initial state check - answers are hidden
    const firstAnswer = getByTestId("answer-1");
    expect(firstAnswer).toHaveStyle("max-height: 0px");

    // Simulate clicking on the first question's checkbox
    fireEvent.click(getByTestId("checkbox-1"));

    // After click state check - answer should be visible
    expect(firstAnswer).not.toHaveStyle("max-height: 0px");
    expect(firstAnswer).toHaveStyle("max-height: 40px");

    // Click again to hide the answer
    fireEvent.click(getByTestId("checkbox-1"));

    // Answer should be hidden again
    expect(firstAnswer).toHaveStyle("max-height: 0px");
  });
});
