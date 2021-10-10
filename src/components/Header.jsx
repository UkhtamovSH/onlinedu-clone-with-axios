import { Col, Container, Row } from "reactstrap"
import './Header.css'

const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={6} xl={5} className="mt-4">
            <div className="appTitleDivVersion3">
              <div className="">
                <div className="">
                  <h1>
                    «Uzluksiz kasbiy ta’lim» <br />elektron platformasi
                  </h1>
                </div>
                <div className="appSubTitleMain">
                  <p className="appSubTitle">
                    Malaka oshirish uchun kurslar endi onlayn.
                    Qulayliklardan foydalaning va vaqtingizni tejang.</p>
                  <button className="appBtn mt-3">
                    Malaka oshirishni boshlash
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} xl={7} className="mt-4">
            <div className="headerImgMain">
              <img src="https://onlinedu.uz/images/intro_w.png"
                className="img-fluid headerImg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
