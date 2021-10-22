import React, { useState } from "react"
import './Login.css'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios"

const Register = () => {
  const [lists, setList] = useState([])
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_Password] = useState("")
  const [error_password, setError_Password] = useState(false)
  const [same_password, setSame_Password] = useState(false)


  const postRegister = (e) => {
    e.preventDefault();

    const registerData = {
      confirm_password: confirm_password,
      login: number,
      password: password
    }

    let v_password = false
    let s_password = false
    if (password.length < 8 && confirm_password.length < 8) {
      v_password = true
    }

    if (password !== confirm_password) {
      s_password = true
    }

    if (!v_password && !s_password) {
      axios.post('https://api.kasbiytalim.uz/api/v1/register', registerData)
        .then(res => {
          setList([...lists], res.registerData)
          setConfirm_Password("")
          setNumber("")
          setPassword("")
        })
        .catch(error => { })
    } else {
      setError_Password(v_password)
      setSame_Password(s_password)
    }
  }

  return (
    <Form onSubmit={(e) => postRegister(e)} className="navbarForm">
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
          onChange={(e) => { setPassword(e.target.value); setError_Password(false) }}
          value={password}
        />

        {error_password ?
          <div style={{ color: 'red' }} >
            Parolni kiriting. Kamida 8 belgi
          </div>
          :
          ''
        }
      </FormGroup>
      <FormGroup>
        <Label for="confirm_password">Parolni takrorlash</Label>
        <Input
          type="password"
          name="confirm_password"
          id="confirm_password"
          onChange={(e) => { setConfirm_Password(e.target.value); setError_Password(false) }}
          value={confirm_password}
        />
        {error_password ?
          <div style={{ color: 'red' }} >
            Parolni kiriting. Kamida 8 belgi
          </div>
          :
          ''
        }
        {same_password ?
          <div style={{ color: 'red' }} >
            Parol bir xil emas
          </div>
          :
          ''
        }
      </FormGroup>
      <div className="text-center my-3">
        <button className="appBtn">Ro`yxatdan o`tish</button>
      </div>
    </Form>
  )
}

export default Register
