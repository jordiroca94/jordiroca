import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders navbar and display key elements", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </I18nextProvider>
    );

    expect(screen.getByLabelText("Go to homepage")).toBeInTheDocument();
  });
});
