import React, { useState } from 'react';
import './TinymceReact.css'
import { Button, Col, Container, Row } from 'reactstrap';
import EditorTinyMce from './sections/EditorTinyMce';
import EditorTinyMceShow from './sections/EditorTinyMceShow';


const TinymceReact = () => {
  const [lists, setLists] = useState([])
  const [val, setVal] = useState("")

  const [showHide, setShowHide] = useState(false)

  const toggleShowHide = () => setShowHide(!showHide)

  const formHandle = (e) => {
    e.preventDefault();

    const listData = {
      id: new Date().getTime(),
      val: val
    }
    toggleShowHide()
    setLists([...lists, listData])
    setVal("")
  }

  return (
    <Container>
      <Row>
        {showHide
          ?
          <Button className="btn btn-secondary" onClick={toggleShowHide}>Cancel</Button>
          :
          <Button className="btn btn-secondary" onClick={toggleShowHide}>Edit</Button>
        }
        {showHide
          ?
          <Col>
            <EditorTinyMce
              value={val}
              setValue={e => setVal(e)}
            />
            <Button className="btn btn-success" onClick={formHandle}>Save</Button>
          </Col>
          :
          <div>
            {lists.map((list, index) => (
              <div className="" key={index}>
                <EditorTinyMceShow text={list ? list.val : '<p></p>'} />
              </div>
            ))}
          </div>
        }

      </Row>
    </Container>
  )
}

export default TinymceReact
