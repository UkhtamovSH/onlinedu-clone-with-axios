import React from "react"
import './Login.css'
import { Form, FormGroup, Input, Label } from 'reactstrap'


const ResetLogin = () => {
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
      <div className="text-center my-3">
        <button className="appBtn">Kirish</button>
      </div>
    </Form>
  )
}

export default ResetLogin
