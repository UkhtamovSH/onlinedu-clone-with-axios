import React, { useState, useEffect } from "react"
import { getInstance } from "../../../helpers/httpClient"
import Highcharts from 'highcharts'
import { HighchartsChart, withHighcharts } from "react-jsx-highcharts"
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
import { Container } from "reactstrap";
ChartModuleMore(Highcharts);


const ChartColumnShowToPage = () => {

  const [resultRegDay, setResultRegDay] = useState([])

  useEffect(() => {
    getResultRegDay();
  }, [])

  const getResultRegDay = () => {
    getInstance()
      .get('/api/v1/result-register?day=1&per_page=7&step=1&&&&&&&')
      .then(res => {
        setResultRegDay(res.data.data)
      })
      .catch(error => { })
  }

  const guruh = resultRegDay.reduce((guruh, name) => {
    const dates = name.name.split('gg.wp')[0];
    if (!guruh[dates]) {
      guruh[dates] = [];
    }
    guruh[dates].push(name);
    return guruh;
  }, {});

  const guruhMassiv = Object.keys(guruh).map((name) => {
    return {
      name,
      data: guruh[name]
    };
  });
  const l = [];
  resultRegDay.map(item => {
    if (!l.includes(item.yearmonth)) {
      l.push(item.yearmonth)
    }
  });
  let counts = [];
  let i = [];

  guruhMassiv.map(d => {
    d.data.map(a => {
      i.push(a.count)
    });
    counts.push({ name: d.name, data: i });
    i = [];
  })


  console.log(l, counts);
  const chart = {
    type: 'spline'
  }
  const title = {
    text: "Ro'yxatdan o'tish (Lavozimlar kesimida)"
  }
  const xAxis = {
    categories: l
  }
  const yAxis = {
    title: {
      text: ''
    }
  }
  const plotOptions = {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: true
    }
  }
  const chartooltip = {
    shared: true,
    pointFormat: '<span>{series.name}: <b>{point.y:,.0f}</b><br/></span>'
  }
  const legend = {
    accessibility: {
      enabled: false,
    },
    keyboardNavigation: {
      enabled: true
    }
  }


  return (
    <Container>
      <div>
        {l.length && counts.length ? <>
          <HighchartsChart
            chart={chart}
            title={title}
            xAxis={xAxis}
            yAxis={yAxis}
            plotOptions={plotOptions}
            series={counts}
            tooltip={chartooltip}
            legend={legend}
          >

          </HighchartsChart>
        </> : ''
        }      </div>

      <p></p>
    </Container>
  )
}

export default withHighcharts(ChartColumnShowToPage, Highcharts);
