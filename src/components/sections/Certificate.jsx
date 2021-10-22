import { Container } from 'reactstrap'
import './Certificate.css'

const Certificate = () => {
  return (
    <>
      <div className="certificate">
        <Container className="certificateSub">
          <div className="appTitleDivVersion1">
            <div className="">
              <h2>Sertifikatni haqiqiylikka tekshiring
              </h2>
            </div>
            <div className="appSubTitleMain">
              <p className="appSubTitle appSubTitleCertificate">Ushbu platforma orqali ish beruvchilar ham, sertifikat egalari ham
                sertifikatning haqiqiyligini tekshirishlari mumkin.</p>
            </div>
          </div>
          <div className="check-certificate">
            <div className="check-certificate__form">
              <form action="">
                <div className="check-certificateflex">
                  <div className="">
                    <input type="text" placeholder="Sertifikat raqamini kiriting" />
                  </div>
                  <div className="">
                    <button className="appBtn appBtnForm">Sertifikatni tekshirish</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Certificate
