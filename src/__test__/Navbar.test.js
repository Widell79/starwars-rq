import React from "react";
import Navbar from "../components/Navbar";

import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Navbar Component", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
  });
});
