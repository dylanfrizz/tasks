import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { ChangeColor } from "./ChangeColor";
//import userEvent from "@testing-library/user-event";
describe("ChangeColor Component tests", () => {
    beforeEach(() => render(<ChangeColor />));
    test("(2 pts) There are at least 8 radio buttons and the colored box", () => {
        const radios = screen.getAllByRole("radio");
        //const boxes = screen.getAllByRole("colored-box");
        expect(radios.length).toBeGreaterThanOrEqual(8);
        expect(screen.getAllByTestId("colored-box")[0]).toBeInTheDocument(); //changed to All, added [0], replaced with my own code since adding a [0] at the end makes toBeInTheDocument the any type || Replaced my own code with the original; the 'the' in toBeInTheDocument was lowercase and [0] was outside of expect, not its not any
    });
    test("(2 pts) Switching the color switches the displayed color.", async () => {
        const radios: HTMLInputElement[] = screen.getAllByRole("radio");
        // Switch to first
        await act(async () => {
            radios[0].click();
        });
        let coloredBox = screen.getByTestId("colored-box"); //changed to All
        expect(coloredBox).toHaveTextContent(radios[0].value); // added [0]
        expect(coloredBox).toHaveStyle({ backgroundColor: radios[0].value });
        // Switch to third
        await act(async () => {
            radios[2].click();
        });
        coloredBox = screen.getByTestId("colored-box"); //added [0]
        expect(coloredBox).toHaveTextContent(radios[2].value);
        expect(coloredBox).toHaveStyle({ backgroundColor: radios[2].value });
        // Switch to 8th
        await act(async () => {
            radios[7].click();
        });
        coloredBox = screen.getByTestId("colored-box"); //added [0]
        expect(coloredBox).toHaveTextContent(radios[7].value);
        expect(coloredBox).toHaveStyle({ backgroundColor: radios[7].value });
        // Switch back to first
        await act(async () => {
            radios[0].click();
        });
        coloredBox = screen.getByTestId("colored-box"); //added [0]
        expect(coloredBox).toHaveTextContent(radios[0].value);
        expect(coloredBox).toHaveStyle({ backgroundColor: radios[0].value });
    });
});
