import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../../sections/Hero";

describe("Hero Component", () => {
  test("renders hero section without button by default", () => {
    const { getByText, queryByRole } = render(<Hero />);

    // Check if headline text is rendered
    const headline = getByText(
      /Sewa & Rental Mobil Terbaik di kawasan Bandung/i
    );
    expect(headline).toBeInTheDocument();

    // Check if description text is rendered
    const description = getByText(
      /Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam./i
    );
    expect(description).toBeInTheDocument();

    // Check if button is not rendered
    const button = queryByRole("button");
    expect(button).toBeNull();
  });

  test("renders hero section with button and navigates to /cars on button click", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Hero showButton={true} />
      </BrowserRouter>
    );

    // Check if button is rendered
    const button = getByText(/Mulai Sewa Mobil/i);
    expect(button).toBeInTheDocument();

    // Simulate button click
    fireEvent.click(button);

    // Check if navigation to /cars is performed
    expect(window.location.pathname).toBe("/cars");
  });
});
