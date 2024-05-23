import {render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe ("Dashboar Component", () => {
    test ("Renders Dashboard Component", () => {
        render(<Dashboard/>);
        
        const formElement = screen.queryByRole ("form", {

        })
        expect (formElement).toBeDefined();
    })
})