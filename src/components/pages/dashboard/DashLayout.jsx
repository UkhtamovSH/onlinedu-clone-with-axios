import React, { useState } from "react"
import { Col, Container, Row } from "reactstrap"
import Layout from "../../Layout.jsx"
import DashSideBar from "../../sections/dashboard/DashSideBar"
import './DashLayout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars
}
  from '@fortawesome/free-solid-svg-icons'


const DashLayout = (props) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <Layout>
      <div className="dashLayout position-relative">
        <Container>
          <Row>
            <Col lg={3} xl={2} className="dashLayout__dashSideBarMain h-100">
              <div className="dashLayout__dashSideBar">
                <div className="dashLayout__dashSideBarSub">
                  <DashSideBar />
                </div>
              </div>
            </Col>
            <Col md={12} lg={9} xl={10} className="py-3">
              <div className="dashLayout__menuIcon py-3">
                <button className="dashLayout__menuIconBtn" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              <div>
                {props.children}
              </div>
            </Col>
          </Row>
        </Container>
        <div className={`dashLayout__menuDivBack 
        ${menuOpen ? "dashLayout__menuDivBackShow" : "dashLayout__menuDivBackHide"} `}
          onClick={toggleMenu} />
        <div className={`dashLayout__menuDiv 
        ${menuOpen ? "dashLayout__menuDivShow" : "dashLayout__menuDivHide"} `}>
          <div className="dashLayout__menuDivSub pt-3">
            <DashSideBar />
          </div>
        </div>
      </div>
      <style jsx={true}>{`
      .asdsa: {
        color: 'red
      }
      `}</style>
    </Layout>
  )
}

export default DashLayout
