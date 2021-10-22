import React, { useState } from "react"
import './Login.jsx'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { getInstance } from '../../helpers/httpClient'
import { setToken } from '../../helpers/tokenStorage'
import { useHistory } from 'react-router-dom'

const Login = (props) => {

  const [lists, setLists] = useState([])
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [err_Password, setErr_Password] = useState(false);
  const [local, setLocal] = useState(true);
  const [loading, setLoading] = useState(false);

  let history = useHistory()

  const postLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = {
      name: number,
      password: password
    }

    let v_password = false;
    if (password.length < 8) {
      v_password = true;
    }
    if (!v_password) {

      getInstance().post('/api/v1/login', loginData)
        .then(res => {
          setToken(res.data.access_token, local);
          setLists([...lists], res.loginData)
          setNumber("")
          setPassword("")
          setLoading(false);
          history.push('dashboard/profile')
        })

        .catch(error => { setLoading(false); })
    } else {
      setErr_Password(v_password);
      setLoading(false);
    }
  }


  return (
    <Form onSubmit={(e) => postLogin(e)} className="navbarForm">
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
          <Input type="checkbox" checked={local} onChange={(e) => { setLocal(e.target.checked) }} />{' '}
          Eslab qolish
        </Label>
      </FormGroup>
      {loading ? <b>Loading...</b>
        : <div className="text-center my-3">
          <button type="submit" className="appBtn">Kirish</button>
        </div>}
    </Form >
  )
}

export default Login
