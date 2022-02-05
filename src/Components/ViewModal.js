import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as moment from 'moment';
import "./location.css";

export default function ViewModal(props) {
    
  const [menu, setMenu] = useState("");
  const dispatch = useDispatch();

  const getCoordinates = (x, y) => {
    return `${x}, ${y}`;
  }

  return (
    <>
      <div className="container AddLocationContainer1">
        {props.data?
        
         <Row>
          <Col lg="12">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">Keyy</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.keyy}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Location Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.locName}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Location Type
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.locType}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Location Sub Type
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.locSubType}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Location Descripation
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.locDesc}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Location Longitude
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.locNameLong}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Location ReferenceID
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.locRefId}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Location ReferenceID Type
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.locRefIdType}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Coordinate(Lat, Long)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={getCoordinates(props.data.coordLonLat.x, props.data.coordLonLat.y)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Address State
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.addrState}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Address County
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.county}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">Notes</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.notes}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Data Cleanse Level
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.dataCleanseLevel}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Is Active
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.isActive}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Is Deleted
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.isDeleted}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Created By
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.created_by}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Created On
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={moment(props.data.created_on).format('DD/MM/YYYY HH:MM:SS')}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Updated By
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={props.data.updated_by}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="formLabelStyle1">
                      Updated On
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      value={moment(props.data.updated_on).format('DD/MM/YYYY HH:MM:SS')}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row> :<p>Loading......</p>
      }
      </div>
    </>
  );
}
