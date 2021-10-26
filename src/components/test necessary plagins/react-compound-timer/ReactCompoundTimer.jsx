import React, { useState, useEffect } from "react"
import './ReactCompoundTimer.css'
import Timer from 'react-compound-timer'

const ReactCompoundTimer = () => {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    var time = setInterval(() => dateNow(), 1000);
    return () => {
      clearInterval(time);
    }
  }, [])

  let dateNow = () => {
    setDate(new Date())
  }

  return (
    <div className="reactCompoundTimer">
      <h1>Timer</h1>
      <Timer
        initialTime={100000000}
        direction={"backward"}
        checkpoints={[
          {
            time: 0,
            callback: () => console.log('gg.wp')
          }
        ]}
      >
        {() => (
          <>
            <div className="timer">
              <div className="mx-2">
                <div className="timerSub">
                  <Timer.Days />
                </div>
                <div className="">
                  Days
                </div>
              </div>
              <div className="mx-2">
                <div className="timerSub">
                  <Timer.Hours />
                </div>
                <div className="">
                  Hours
                </div>
              </div>
              <div className="mx-2">
                <div className="timerSub">
                  <Timer.Minutes />
                </div>
                <div className="">
                  Minutes
                </div>
              </div>
              <div className="mx-2">
                <div className="timerSub">
                  <Timer.Seconds />
                </div>
                <div className="">
                  Seconds
                </div>
              </div>
            </div>
          </>
        )}
      </Timer>


      <h1 className="mt-5">Soat</h1>
      <div className="timer">
        <div className="mx-2">
          <div className="timerSub">
            {`${date.getHours()}`}
          </div>
          <div className="">
            Soat
          </div>
        </div>
        <div className="mx-2">
          <div className="timerSub">
            {`${date.getMinutes()}`}
          </div>
          <div className="">
            Minut
          </div>
        </div>
        <div className="mx-2">
          <div className="timerSub">
            {`${date.getSeconds()}`}
          </div>
          <div className="">
            Sekund
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactCompoundTimer

