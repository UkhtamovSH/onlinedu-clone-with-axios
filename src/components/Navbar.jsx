import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLen, setIsOpenLen] = useState(false)

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

  const toggleIsOpen = () => setIsOpen(!isOpen)
  const toggleIsOpenLen = () => setIsOpenLen(!isOpenLen)

  return (
    <div className="navbar sticky-top">
      <Container>
        <div className="navbar__flexRightSub1Main">
          <div className="navbar__flexRightSub1">
            <img src="https://onlinedu.uz/images/assets/logo.png"
              className="footer__logo" alt="" />
          </div>
          <div className="navbar__flexRightSub2">
            <button className="menuMainBtn" onClick={toggleIsOpen}>
              <span className="icon icon-menu" />
              Kategoriyalar
            </button>
            <div className={`menuMain ${isOpen ? " show" : "hide"}`}>
              <div className="menuMainSub">
                <ul>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to={"https://onlinedu.uz/courses/1?category=" + category.id}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar__flexRightSub3">
            <div className="d-inline-block">
              <input type="text"
                placeholder="Nimani o'rganishni xohlaysiz?" />
            </div>
            <div className="d-inline-block">
              <button className="appBtn3">
                <img src="search-line.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="navbar__flexRightSub4">
            <button className="menuMainBtn" onClick={toggleIsOpenLen}>
              O`zbekcha
            </button>
            <div className={`menuMain ${isOpenLen ? " show" : "hide"}`}>
              <div className="menuMainSub">
                <ul>
                  <li>
                    <Link to=""> O`zbekcha </Link>
                  </li>
                  <li>
                    <Link to=""> Русский </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar__flexRightSub5">
            <button className="appBtnMenu2 appBtn222 d-inline-block">
              <span className="icon icon-userLine" />
              <p className="d-inline-block mb-0">Kirish</p>
            </button>
            <div className="d-inline-block">
              <div className="appBtn22">
                <button className="appBtnMenu ">
                  <span className="icon icon-menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
}

export default Navbar
