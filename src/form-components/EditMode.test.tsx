import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { EditMode } from "./EditMode";
import userEvent from "@testing-library/user-event";

describe("EditMode Component tests", () => {
    beforeEach(() => render(<EditMode />));
    test("(2 pts) There is one checkbox and no textboxes", () => {
        const switchButton = screen.getAllByRole("checkbox"); // changed getByRole to getAllByRole
        expect(switchButton[0]).toBeInTheDocument(); // will try switchButton[0] and [1] since it's an array now
        expect(switchButton[0].parentElement).toHaveClass("form-switch"); //added [0] to switchButton
        expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });
    test("(2 pts) Initial text should be 'Your Name is a student'.", () => {
        expect(screen.getByText(/Your Name is a student/i)).toBeInTheDocument();
    });
    test("(2 pts) Can switch into Edit Mode", async () => {
        const switchButton = screen.getAllByRole("checkbox"); //changed getByRole to getAllByRole
        await act(async () => {
            switchButton[0].click(); // added [0] to switchButton
        });
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getAllByRole("checkbox")).toHaveLength(2);
    });
    test("(2 pts) Editing the name and student status changes the text", async () => {
        const switchButton = screen.getAllByRole("checkbox"); // changed getByRole to getAllByRole
        await act(async () => {
            switchButton[0].click(); // added [0] to switchbutton. Not sure if I should keep doing this if they're likely to be all changed with [0]
        });
        const nameBox = screen.getByRole("textbox");
        await act(async () => {
            userEvent.type(nameBox, "Ada Lovelace");
        });
        const studentBox = screen.getByRole("checkbox", { name: /student/i });
        await act(async () => {
            studentBox.click();
        });
        await act(async () => {
            switchButton[0].click(); // added [0]
        });
        expect(
            screen.getByText(/Ada Lovelace is not a student/i),
        ).toBeInTheDocument();
    });
    test("(2 pts) Different name, click student box twice changes the text", async () => {
        const switchButton = screen.getAllByRole("checkbox"); // changed getByRole to getAllByRole
        await act(async () => {
            switchButton[0].click(); // added [0]
        });
        const nameBox = screen.getByRole("textbox");
        await act(async () => {
            userEvent.type(nameBox, "Alan Turing");
        });
        const studentBox = screen.getByRole("checkbox", { name: /student/i });
        await act(async () => {
            studentBox.click();
        });
        await act(async () => {
            studentBox.click();
        });
        await act(async () => {
            switchButton[0].click(); // added [0]
        });
        expect(
            screen.getByText(/Alan Turing is a student/i),
        ).toBeInTheDocument();
    });
});
