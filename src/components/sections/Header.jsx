import { Col, Container, Row } from "reactstrap"
import './Header.css'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={6} xl={5} className="mt-4">
            <div className="appTitleDivVersion3">
              <div className="">
                <div className="">
                  <h1>
                    {t('header.title')}
                  </h1>
                </div>
                <div className="appSubTitleMain">
                  <p className="appSubTitle">
                    {t('header.subTitle')}
                  </p>
                  <button className="appBtn mt-3">
                    {t('header.btn')}
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
