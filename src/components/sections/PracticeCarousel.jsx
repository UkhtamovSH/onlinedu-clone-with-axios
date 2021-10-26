import React, { useEffect, useState } from 'react'
import { Container } from "reactstrap"
import './PracticeCarousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from '../../helpers/api.jsx'
import { getNotAuthInstance } from '../../helpers/httpClient';

const PracticeCarousel = () => {
  const [userCount, setUserCount] = useState([])

  useEffect(() => {
    getUserCount();
  }, [])

  const getUserCount = () => {
    getNotAuthInstance()
      .get('/api/v1/admin/user_count')
      .then(res => {
        setUserCount(res.data.data)
      })
      .catch(error => { })
  }
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="practiceCarousel">
      <Container>
        <div className="appTitleDivVersion1">
          <div className="">
            <div className="practiceCarousel__titleMain">
              <h3 className="practiceCarousel__title">
                <span>{'{ '}</span>{userCount.user_count} + xalq ta'limi xodimlari <span>{' }'} </span>
                butun O'zbekiston bo'yicha
                onlayn tarzda malaka oshirishmoqda.
              </h3>
            </div>
          </div>
        </div>

        <Slider {...settings} className="practice__carousel">
          <div className="practice__carouselCard">
            <img src={`${API_URL}/manager/images/p1.png`}
              className="practice__carouselImg img-fluid"
              alt=""
              onError={
                e => {
                  e.target.onerror = null;
                  e.target.src = '/course.jpeg'
                }
              }
            />
          </div>
          <div className="practice__carouselCard">
            <img src={`${API_URL}/images/p2.png`}
              className="practice__carouselImg img-fluid"
              alt=""
              onError={
                e => {
                  e.target.onerror = null;
                  e.target.src = '/course.jpeg'
                }
              }
            />
          </div>
          <div className="practice__carouselCard">
            <img src={`${API_URL}/images/p3.png`}
              className="practice__carouselImg img-fluid"
              alt=""
              onError={
                e => {
                  e.target.onerror = null;
                  e.target.src = '/course.jpeg'
                }
              }
            />
          </div>
          <div className="practice__carouselCard">
            <img src={`${API_URL}/images/p4.png`}
              className="practice__carouselImg img-fluid"
              alt=""
              onError={
                e => {
                  e.target.onerror = null;
                  e.target.src = '/course.jpeg'
                }
              }
            />
          </div>
          <div className="practice__carouselCard">
            <img src={`${API_URL}/images/p5.png`}
              className="practice__carouselImg img-fluid"
              alt=""
              onError={
                e => {
                  e.target.onerror = null;
                  e.target.src = '/course.jpeg'
                }
              }
            />
          </div>
          <div className="practice__carouselCard">
            <img src={`${API_URL}/images/p6.png`}
              className="practice__carouselImg img-fluid"
              alt=""
              onError={
                e => {
                  e.target.onerror = null;
                  e.target.src = '/course.jpeg'
                }
              }
            />
          </div>
        </Slider>
      </Container>
    </div>
  )
}

export default PracticeCarousel
