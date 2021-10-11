import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import './Courses.css'


const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses();
  }, [])

  const getCourses = () => {
    axios.get('https://api.onlinedu.uz/api/v1/courses?per_page=6&category_type=paid&is_home=1')
      .then(res => {
        setCourses(res.data.data)
      })
      .catch(error => { })
  }

  return (
    <div className="courses">
      <Container>
        <div className="">
          <div className="text-center mb-5">
            <h1>Ommabop kurslar</h1>
          </div>
        </div>
        <Row>
          {courses.map((course, index) => (
            <Col sm={12} md={6} lg={6} xl={4} className="courses__cardCol" key={index}>
              <div className="courses__card">
                <div className="courses__cardColImg">
                  <img src={"https://api.onlinedu.uz/storage/" + course.image} className="img-fluid courses__cardColImgSub" alt="edu" />
                  <div to="" className="appBtn2Div">{course.category.name}</div>
                </div>
                <div className="courses__cardInfo">
                  <p>{course.name}</p>
                  <div className="courses__cardFlex1">
                    <div className="">
                      <div className="courses__cardFlex2">
                        <div className="">
                          {
                            course.price === 0
                              ?
                              <p>Bepul</p>
                              :
                              <p>{course.price} sum</p>
                          }
                        </div>
                        <div className="">
                          <p>| 0 kredit</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <Link to="" className="appBtn2">Tanlash</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="appBtnMain">
          <Link to="" className="appBtn">Barcha kurslarni ko'rish</Link>
        </div>
      </Container>
    </div>
  )
}

export default Courses

