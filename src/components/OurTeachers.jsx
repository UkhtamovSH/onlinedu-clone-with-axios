import React, { useState, useEffect } from "react";
import './OurTeachers.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const OurTeachers = () => {

  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    getTeachers();
  }, [])

  const getTeachers = () => {
    axios.get('https://api.onlinedu.uz/api/v1/teachers?page=1&per_page=5')
      .then(res => {
        setTeachers(res.data.data)
      })
      .catch(error => { })
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
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
    <div className="ourTeachers">
      <Container>
        <div className="appTitleDivVersion1">
          <div className="">
            <h2>Bizning mutaxassislar</h2>
          </div>
          <div className="appSubTitleMain">
            <p className="appSubTitle">Yetakchi mutaxassislarimiz tomonidan tayyorlangan kurslar
              sizga kerakli barcha bilimlarni berib, malakangizni oshirishga yordam beradi.</p>
          </div>
        </div>
        <Slider {...settings} className="ourTeachers__carousel">
          {teachers.map((teacher, index) => (
            <div className="ourTeachers__carouselCard" key={index}>
              <div className="ourTeachers__carouselFlex">
                <div className="ourTeachers__divImg">
                  <img src={"https://api.onlinedu.uz/storage/" + teacher.image}
                    className="ourTeachers__img"
                    alt="" />
                </div>
                <div className="">
                  <p className="ourTeachers__carouselName">{teacher.name}</p>
                </div>
                <div className="">
                  <p className="ourTeachers__carousePosition">{teacher.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="appBtnMain">
          <Link to="" className="appBtn">Barchani ko'rish</Link>
        </div>
      </Container>
    </div>
  )
}

export default OurTeachers
