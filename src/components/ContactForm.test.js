import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm"

test('ContactForm adds new contact info to the list',()=>{
render(<ContactForm/>)

const fnameInput = screen.getByPlaceholderText(/edd/i)
const lnameInput = screen.getByPlaceholderText(/burke/i)
const emailInput = screen.getByText(/email/i)
const message = screen.findByLabelText(/message/i)








fireEvent.change(fnameInput,{target:{value:'ahmad'}})
fireEvent.change(lnameInput,{target:{value:'sayadi'}})
// fireEvent.change(emailInput,{target:{value:"ahmad@yahoo.com"}})
// fireEvent.change(message,{target:{value:'none'}})


const submitButton = screen.queryByText(/submit/i);
//  fireEvent.click(submitButton);



 const newContact = screen.getByText(/ahmad/i)
 expect(newContact).toBeInTheDocument();
})