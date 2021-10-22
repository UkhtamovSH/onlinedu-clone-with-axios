import React, { useState, useEffect } from 'react'
import { getInstance } from '../../../helpers/httpClient'
import DashLayout from "./DashLayout"
import './DashProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase, faEdit
} from '@fortawesome/free-solid-svg-icons'

const DashProfile = () => {

  const [profileInfo, setproFileInfo] = useState([])

  useEffect(() => {
    getProfileInfo()
  }, [])

  const getProfileInfo = () => {
    getInstance()
      .get('/api/v1/profil/get')
      .then(res => {
        setproFileInfo(res.data.data)
      })
      .catch(error => { })
  }

  return (
    <DashLayout>
      <p className="dashAppTitle mb-2">Mening profilim</p>
      <div className="dashProfile">
        <div className="dashProfile__card">
          <div className="dashProfile__cardFlex">
            <div className="">
              <div className="dashProfile__card1Flex">
                <div className="">
                  <img
                    className="dashProfile__cardImg"
                    src={profileInfo.avatar}
                    alt=""
                    onError={
                      e => {
                        e.target.onError = null;
                        e.target.src = '/user.png'
                      }
                    }
                  />
                </div>
                <div className="">
                  <p className="dashProfile__cardFullName">
                    {profileInfo.firstname} {profileInfo.lastname}
                  </p>
                  <p className="dashProfile__positionType">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span className="mx-2">{profileInfo.position_type ? profileInfo.position_type.type.name : ''}</span>
                    <span>({profileInfo.position_type ? profileInfo.position_type.name : ''})</span>
                  </p>
                </div>
              </div>
              {console.log(profileInfo)}
            </div>
            <div className="">
              <button className="dashProfile__cardBtn">
                <FontAwesomeIcon icon={faEdit} /> O`zgartirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  )
}

export default DashProfile
