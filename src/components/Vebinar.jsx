import { Link } from "react-router-dom"
import { Container } from "reactstrap"
import './Vebinar.css'

const Vebinar = () => {
  return (
    <div className="vebinar">
      <Container>
        <div className="appTitleDivVersion2">
          <div className="">
            <h1>Mutaxassislar tomonidan o'tkaziladigan vebinarga qo'shiling</h1>
          </div>
          <div className="appSubTitleMain">
            <p className="appSubTitle mt-3">
              Vebinarlarni qatnashib, yangi bilimlar orttiring, tajribangiz bilan ulashing, savol bering va javoblar oling!
            </p>
          </div>
        </div>
        <div className="cta-participants">
          <div className="cta-participants-flex">
            <div className="">
              <ul>
                <li>
                  <img src="https://onlinedu.uz/images/teachers/4.jpg" alt="edu" />
                </li>
                <li>
                  <img src="https://onlinedu.uz/images/teachers/1.jpg" alt="edu" />
                </li>
                <li>
                  <img src="https://onlinedu.uz/images/teachers/2.jpg" alt="edu" />
                </li>
                <li>
                  <span>+120</span>
                </li>
              </ul>
            </div>
            <div className="">
              <p>
                foydalanuvchi barcha yo'nalishlar bo'yicha
                vebinarlarga qo'shilishdi.
              </p>
            </div>
          </div>
        </div>
        <Link to="" className="appBtn mt-3">Qo`shilish</Link>
      </Container>
    </div>
  )
}

export default Vebinar
