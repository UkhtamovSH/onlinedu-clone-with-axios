import React from "react"
import './ReactSelect.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { Col, Container, Row } from "reactstrap"

const ReactSelect = () => {

  const options = [
    {
      value: 'sport',
      label: 'Football'
    },
    {
      value: 'news',
      label: 'Football News'
    },
    {
      value: 'IT news',
      label: 'About IT News'
    },
  ]

  // const colourOptions = [
  //   {
  //     value: 'ocean',
  //     label: 'Ocean'
  //   },
  //   {
  //     value: 'blue',
  //     label: 'Blue'
  //   },
  //   {
  //     value: 'red',
  //     label: 'Red'
  //   },
  // ]

  const flavourOptions = [
    {
      value: 'chocolate',
      label: 'Chocolate'
    },
    {
      value: 'strawberry',
      label: 'Strawberry'
    },
    {
      value: 'apple',
      label: 'Apple'
    },
  ]

  // const groupedOptions = [
  //   {
  //     value: 'Colours',
  //     label: colourOptions,
  //   },
  //   {
  //     value: 'Flavour',
  //     label: flavourOptions,
  //   },
  // ]

  const animatedComponents = makeAnimated()

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h6 className="my-3 text-center">
              Import the default export and render in your component:
            </h6>
            <Select options={options} />
          </Col>
          <Col md={6}>
            <h6 className="my-3 text-center">
              Animation
            </h6>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={flavourOptions}
              isMulti
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ReactSelect

