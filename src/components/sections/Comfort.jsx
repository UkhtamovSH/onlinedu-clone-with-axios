import { Col, Container, Row } from 'reactstrap'
import './Comfort.css'

const Comfort = () => {
  return (
    <div className="comfort">
      <div className="appTitleDivVersion1">
        <div className="">
          <h2>Siz uchun yaratilgan qulayliklar
          </h2>
        </div>
        <div className="appSubTitleMain">
          <p className="appSubTitle appSubTitleCertificate">Platformamiz yuqori texnologiyalar zamonida taqdim qilinayotgan imkoniyatlardan unumli foydalanishga va
            vaqtingizni tejashga, o'zingizga qulay vaqtda malaka oshirishingizga yordam beradi.</p>
        </div>
      </div>
      <Container>
        <Row className="mt-4">
          <Col sm={12} md={4} lg={3} xl={3} className="mt-3">
            <div className="comfort__card">
              <img src="svg1.jpg" className="comfort__img" alt="" />
              <p className="comfort__cardTitle">Qulay interfeys</p>
              <p className="comfort__cardDesc">Oson, tushunarli va qulay interfeys orqali platforma imkoniyatlaridan to'liq foydalanishingiz mumkin</p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3} xl={3} className="mt-3">
            <div className="comfort__card">
              <img src="svg2.jpg" className="comfort__img" alt="" />
              <p className="comfort__cardTitle">Malakali mutaxassislar</p>
              <p className="comfort__cardDesc">Malakali mutaxassislar tomonidan tayyorlangan kurslar orqali o'z malakangizni oshiring. Yanada ko'proq bilimga ega bo'ling.</p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3} xl={3} className="mt-3">
            <div className="comfort__card">
              <img src="svg3.jpg" className="comfort__img" alt="" />
              <p className="comfort__cardTitle">
                50+ kurslar barcha yo'nalishlar bo'yicha
              </p>
              <p className="comfort__cardDesc">Oson, tushunarli va qulay interfeys orqali platforma imkoniyatlaridan to'liq foydalanishingiz mumkin</p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={3} xl={3} className="mt-3">
            <div className="comfort__card">
              <img src="svg4.jpg" className="comfort__img" alt="" />
              <p className="comfort__cardTitle">
                50+ kurslar barcha yo'nalishlar bo'yicha
              </p>
              <p className="comfort__cardDesc">
                O'zingiz qiziqqan istalgan kursni toping. Qo'shimcha kurslarga yozilib, bilimlaringizni yanada boyitib, malakangizni oshiring.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Comfort
