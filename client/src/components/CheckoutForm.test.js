import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
    
    const successMessage = screen.getByTestId(/successMessage/i)
    expect(successMessage).toBeInTheDocument()

    const firstNameInput = screen.getByLabelText(/first name:/i)
    fireEvent.change(firstNameInput, { target: { value: 'Hailey' }});

    const lastNameInput = screen.getByLabelText(/last name:/i)
    fireEvent.change(lastNameInput, { target: { value: 'Hansard' }});

    const addressInput = screen.getByLabelText(/address:/i)
    fireEvent.change(addressInput, { target: { value: '123 Magnolia Street' }});

    const cityInput = screen.getByLabelText(/city:/i)
    fireEvent.change(cityInput, { target: { value: 'Los Angeles' }});

    const stateInput = screen.getByLabelText(/state:/i)
    fireEvent.change(stateInput, { target: { value: 'CA' }});

    const zipInput = screen.getByLabelText(/zip:/i)
    fireEvent.change(zipInput, { target: { value: '90027' }});
});
