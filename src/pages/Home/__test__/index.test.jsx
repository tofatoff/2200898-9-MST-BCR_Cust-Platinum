import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home page", () => {
  it("renders and show home title", () => {
    render(<Home />);
    const pageTitle = screen.getByText(
      "Sewa & Rental Mobil Terbaik di kawasan Jakarta Utara"
    );
    expect(pageTitle).toBeDefined();
  });
});
