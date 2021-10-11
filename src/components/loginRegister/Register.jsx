import React from "react"
import './Login.css'
import { Form, FormGroup, Input, Label } from 'reactstrap'


const Register = () => {
  return (
    <Form className="navbarForm">
      <FormGroup>
        <Label for="exampleNumber">Telefon raqam</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Parol</Label>
        <Input type="password" name="password" id="examplePassword" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword2">Parolni takrorlash</Label>
        <Input type="password" name="password" id="examplePassword2" />
      </FormGroup>
      <div className="text-center my-3">
        <button className="appBtn">Ro`yxatdan o`tish</button>
      </div>
    </Form>
  )
}

export default Register
