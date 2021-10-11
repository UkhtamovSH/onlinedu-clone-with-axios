import React, { useState } from "react"
import './Login.jsx'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import axios from "axios"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const Login = () => {

  const [lists, setLists] = useState([])
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [err_Password, setErr_Password] = useState(false);

  const postLogin = (e) => {
    e.preventDefault();

    const loginData = {
      number: number,
      password: password
    }

    let v_password = false;
    if (password.length < 8) {
      v_password = true;
    }
    if (!v_password) {
      axios.post('https://api.kasbiytalim.uz/api/v1/login', loginData)
        .then(res => {
          setLists([...lists], res.loginData)
          setNumber("")
          setPassword("")
        })
        .catch(error => { })
    } else {
      setErr_Password(v_password);
    }
  }


  return (
    <Form onSubmit={(e) => postLogin(e)} className="navbarForm">
      {/* <FormGroup>
        <Label for="exampleNumber">Telefon raqam</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
      </FormGroup> */}
      <PhoneInput
        onChange={(e) => setNumber(e)}
        value={number}
        inputExtraProps={{
          name: "phone",
          required: true,
          autoFocus: true
        }}
        country={"uz"}
        onlyCountries={['uz']}
        masks={{ uz: '(..) ...-..-..' }}
        placeholder={'+998 () ___--__'}
        areaCodes={{ uz: ['998'] }}
        autocomplete="off"
        name="phone"
      />
      <FormGroup>
        <Label for="password">Parol</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={(e) => { setPassword(e.target.value); setErr_Password(false) }}
          value={password}
        />

        {err_Password ?
          <div style={{ color: 'red' }} >
            Parolni kiriting. Kamida 8 belgi
          </div>
          :
          ''
        }
      </FormGroup>

      <FormGroup check className="py-2">
        <Label check>
          <Input type="checkbox" />{' '}
          Eslab qolish
        </Label>
      </FormGroup>

      <div className="text-center my-3">
        <button type="submit" className="appBtn">Kirish</button>
      </div>
    </Form >
  )
}

export default Login
