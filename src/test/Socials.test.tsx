import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Socials from "../components/Socials";

describe("Socials component", () => {
  it("renders all social links with correct URLs and labels", () => {
    render(<Socials />);

    const email = screen.getByLabelText(/email/i);
    const github = screen.getByRole("link", { name: /github/i });
    const linkedin = screen.getByRole("link", { name: /linkedin/i });

    expect(email).toHaveAttribute("href", "mailto:jordirocasoler94@gmail.com");
    expect(github).toHaveAttribute("href", "https://github.com/jordiroca94");
    expect(linkedin).toHaveAttribute(
      "href",
      "https://linkedin.com/in/jordi-roca-soler"
    );

    expect(github).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("target", "_blank");
  });
});
