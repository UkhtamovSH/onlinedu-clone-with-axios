import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import axios from "axios"
import './Footer.css'

const Footer = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = () => {
    axios.get('https://api.onlinedu.uz/api/v1/paid/categories')
      .then(res => {
        setCategories(res.data.data)
      })
      .catch(error => { })
  }

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={3} xl={3} className="footer__column">
            <img src="https://onlinedu.uz/images/assets/logo.png"
              className="footer__logo" alt="" />
          </Col>
          <Col sm={12} md={4} lg={3} xl={3} className="footer__column">
            <p className="footer__columnTitle">Kurslar</p>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={"https://onlinedu.uz/courses/1?category=" + category.id}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm={12} md={4} lg={3} xl={3} className="footer__column">
            <p className="footer__columnTitle">MENING PROFILIM</p>
            <ul>
              <li>
                <Link to="">Akkaunt</Link>
              </li>
              <li>
                <Link to="">Sozlamalar</Link>
              </li>
              <li>
                <Link to="">E'lonlar</Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={4} lg={3} xl={3} className="footer__column">
            <p className="footer__columnTitle">ALOQA</p>
            <ul>
              <li>
                <Link to="">Biz haqimizda</Link>
              </li>
              <li>
                <Link to="">Konfidentsiallik siyosati</Link>
              </li>
              <li>
                <Link to="">Yordam</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer__bottom">
        <div className="">
          <p className="footer__bottomTitle">© 2020-2021 Copyright. <Link to="">Barcha huquqlar himoyalangan.</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
