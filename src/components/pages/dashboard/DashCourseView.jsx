import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'reactstrap';
import { IMG_URL } from '../../../helpers/api';
import { getInstance } from '../../../helpers/httpClient';
import './DashCourseView.css'
import DashLayout from "./DashLayout"

const DashCourseView = (props) => {
  const [course, setCourse] = useState([])
  const [loading, setLoading] = useState(false)

  let slug = props.match.params.slug ? props.match.params.slug : ''

  useEffect(() => {
    getCourse()
    slug = props.match.params.slug ? props.match.params.slug : ''
  }, [props.match.params.slug])

  const getCourse = () => {
    setLoading(true)
    getInstance()
      .get(`/api/v1/course/${slug}`)
      .then(res => {
        setCourse(res.data.data)
        setLoading(false)
      })
      .catch(error => { })
  }

  console.log(course);

  return (
    <DashLayout>
      {loading
        ?
        <div className="">
          loading...
        </div>
        :
        <div>
          {course
            ?
            <div>
              <h3 className="mb-3">{course.name ? course.name : ''}</h3>
              <Row>
                <Col md={11}>
                  <Row>
                    <Col md={9}>
                      <p className="mt-3">
                        {course.description ? course.description : ''}</p>
                    </Col>
                    <Col md={3}>
                      <Card className={`courseView__Card`}>
                        <img src={IMG_URL + course.image}
                          onError={e => {
                            e.target.onerror = null;
                            e.target.src = '/course.jpeg'
                          }}
                          alt="" />
                        <div className={`courseView__CardInfo`}>
                          {/* <p>{course.category.name ? course.cateё */}
                          <p>A`zo bo`lganlar soni: {course.buys_count}</p>
                          {course.price > 0
                            ?
                            <p>{course.price} sum | 0 kredit</p>
                            :
                            <p>Bepul | 0 kredit</p>
                          }
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}>
                  gg
                </Col>
              </Row>
            </div>
            :
            ''
          }
        </div>
      }
    </DashLayout >
  )
}

export default DashCourseView
