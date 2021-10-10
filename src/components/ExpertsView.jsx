import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap';
import './ExpertsView.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const ExpertsView = () => {
  const [experts, setExpert] = useState([])
  useEffect(() => {
    getExperts()
  }, [])

  const getExperts = () => {
    axios.get('https://api.onlinedu.uz/api/v1/reviews')
      .then(res => {
        setExpert(res.data)
      })
      .catch(error => { })
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="experts">
      <Container>
        <div className="appTitleDivVersion1">
          <div className="">
            <h2>Xalqaro ekspertlarning fikrlari</h2>
          </div>
          <div className="appSubTitleMain">
            <p className="appSubTitle">
              «Uzluksiz kasbiy ta’lim» elektron platformasi faoliyati va imkoniyatlarini o'rgangan ta'lim sohasidagi xalqaro ekspertlarning fikrlari bilan tanishing.
            </p>
          </div>
        </div>
        <div className="experts__carouselMain">
          <Slider {...settings} className="experts__carousel mt-5">
            {experts.map((expert, index) => (
              <div className="experts__carouselCard" key={index}>
                <div className="experts__carouselCardFlex">
                  <div className="">
                    <div className="experts__carouselCardFlexSub">
                      <img src={"https://api.onlinedu.uz/storage/" + expert.image}
                        className="experts__carouselImg img-fluid" alt="" />
                      <p className="experts__carouselText1">{expert.name}</p>
                      <p className="experts__carouselText1">{expert.position}</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="experts__carouselCardFlex2">
                      <p className="experts__carouselText2">{expert.comment}</p>
                    </div>
                  </div>
                </div>
                <img src="https://onlinedu.uz/images/quote.svg" className="experts__carouselImg2" alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  )
}

export default ExpertsView
