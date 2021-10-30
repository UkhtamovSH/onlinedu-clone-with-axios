import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Modal, ModalBody } from "reactstrap"
import './DashSideBar.css'
import { removeToken } from '../../../helpers/tokenStorage'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faGraduationCap,
  faUsers,
  faBook,
  faCertificate,
  faTh,
  faDiagnoses,
  faQuestionCircle,
  faSms,
  faBell,
  faCog,
  faSignOutAlt
}
  from '@fortawesome/free-solid-svg-icons'

const DashSideBar = () => {
  const [modal, setModal] = useState(false)

  let history = useHistory();

  const toggleModal = () => setModal(!modal)



  return (
    <>
      <div className="dashSideBarLinks">
        <NavLink to="/dashboard/profile" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <span>Mening profilim</span>
        </NavLink>
        <NavLink to="/dashboard/course/view" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <span>Mening kurslarim</span>
        </NavLink>
        <NavLink to="/dashboard/teachers" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <span>O'qituvchilar</span>
        </NavLink>
        <NavLink to="/dashboard/courses" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <span>Kurslar</span>
        </NavLink>
        <NavLink to="/dashboard/certificates" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faCertificate} />
          </div>
          <span>Sertifikatlar</span>
        </NavLink>
        <NavLink to="/dashboard/statistics" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faTh} />
          </div>
          <span>Statistika</span>
        </NavLink>
        <NavLink to="/dashboard/diagnostics" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faDiagnoses} />
          </div>
          <span>Diagnostik test</span>
        </NavLink>
        <NavLink to="/dashboard/surveys" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
          <span>So'rovnoma</span>
        </NavLink>
        <NavLink to="/dashboard/chat" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faSms} />
          </div>
          <span>Chatlar</span>
        </NavLink>
        <NavLink to="/dashboard/notification" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <span>E'lonlar</span>
        </NavLink>
        <NavLink to="/dashboard/settings" activeStyle={{ color: '#26CAAC' }}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faCog} />
          </div>
          <span>Sozlamalar</span>
        </NavLink>
        <div className="navLinkDivSideBar" onClick={toggleModal}>
          <div className="fontAwesomeDiv">
            <FontAwesomeIcon icon={faSignOutAlt} style={{ transform: 'rotate(180deg)' }} />
          </div>
          <span>Chiqish</span>
        </div>

        <Modal isOpen={modal} toggle={toggleModal} className="p-5">
          <ModalBody>
            <div className="closeLineModalMain">
              <img src="close-line.svg" className="closeLineModal" onClick={toggleModal} alt="" />
            </div>
          </ModalBody>
          <h5 className="text-center">Chiqish</h5>
          <h6 className="text-center">Haqiqatdan o'z akkauntingizdan chiqmoqchimisiz?</h6>
          <div className="text-center">
            <button className="mx-3">Bekor qilish</button>
            <button className="mx-3"
              onClick={() => { removeToken(); history.push('/'); toggleModal() }}>
              Chiqish
            </button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default DashSideBar
