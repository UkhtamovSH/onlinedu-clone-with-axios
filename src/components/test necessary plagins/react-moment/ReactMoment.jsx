import React from "react"
import './ReactMoment.css'
import Moment from 'react-moment'

const ReactMoment = () => {

  const dateToFormat = new Date();

  const filterLowercase = (low) => {
    // let changeColor = document.getElementById('filterDate')

    return (
      // changeColor.style.color = "red",
      low.toLowerCase()
    )
  }

  const unixTimestamp = 198784740;

  const calendarStrings = {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    lastWeek: '[last] dddd [at] LT',
    nextWeek: 'dddd [at] LT',
    sameElse: 'L'
  };

  return (
    <>

      1.) Format current date: YYYY/MM/DD: <br />
      <Moment interval={1000} date={dateToFormat} format="YYYY/MM/DD" />
      <br /><br />

      2.) Parse this date: 1976-04-19 12:59: <br />
      <Moment parse="YYYY-MM-DD HH:mm">
        1976-04-19 12:59
      </Moment>

      <br /><br />
      3.) Add hour 1 to current date: <br />
      <Moment add={{ hours: 1 }}>{dateToFormat}</Moment>

      <br /><br />
      4.) Substtact hour 1 to current date: <br />
      <Moment substract={{ hours: 1 }}>{dateToFormat}</Moment>

      <br /><br />
      5.)FromNow: <br />
      <Moment fromNow>{dateToFormat}</Moment>

      <br /><br />
      6.)FromNow ago: <br />
      <Moment fromNow ago>{dateToFormat}</Moment>

      <br /><br />
      7.)toNow: <br />
      <Moment toNow>{dateToFormat}</Moment>

      <br /><br />
      8.)to: <br />
      <Moment to="2015">{dateToFormat}</Moment>

      <br /><br />
      9.)filter: <br />
      <Moment filter={filterLowercase}>{dateToFormat}</Moment>

      <br /><br />
      10.)diff: <br />
      <Moment diff="2015-04-19">1976-04-19T12:59-0500</Moment><br />
      <Moment diff="2015-04-19" unit="days">1976-04-19T12:59-0500</Moment><br />
      <Moment diff="2015-04-19" unit="years" decimal>1976-04-19T12:59-0500</Moment>

      <br /><br />
      11.)duration: <br />
      <Moment duration="2000-04-19T12:59-0500"
        date={{ dateToFormat }}
      />

      <br /><br />
      12.)durationFromNom: <br />
      <Moment duration="2000-04-19T12:59-0500"
        durationFromNow
      />

      <br /><br />
      13.)unixTimestamp: <br />
      <Moment unix>{unixTimestamp}</Moment>

      <br /><br />
      14.)timezon: <br />
      <Moment calendar={calendarStrings}>
        '1976-04-19T12:59-0500'
      </Moment>
    </>
  )
}

export default ReactMoment

