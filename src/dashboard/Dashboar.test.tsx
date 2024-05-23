import {render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import userEvent from "@testing-library/user-event";

describe ("Dashboar Component", () => {
    test ("Renders Dashboard Component", () => {
        render(<Dashboard/>);
        
        const formElement = screen.queryByRole ("form", {

        })
        expect (formElement).toBeDefined();

        const buttonElement  = screen.getByRole("button", {name : "Submit" });
        userEvent.click (buttonElement);
        expect(buttonElement).toBeTruthy();
    })
})