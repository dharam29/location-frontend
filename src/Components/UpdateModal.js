import React, { useEffect, useState, Component } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import "./location.css";
import {
  getLocationDetails,
  addLocationDetails,
  deleteLocationDetails,
  updateLocationDetails,
} from "../Redux/Action/LocationAction";
import { connect, useDispatch } from "react-redux";

class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        ...props?.data,
        coordLonLat: Object.values(props?.data?.coordLonLat || {})?.join(", "),
      },
    };
  }

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState((prevState) => ({
      ...prevState,
      userInfo: {
        ...prevState.userInfo,
        [name]: value,
      },
    }));
  };
  onSubmit = async (id) => {
    let check = this.state.userInfo;

    await this.props.updateLocationDetails(
      {
        ...this.state.userInfo,
        isDeleted: this.state.userInfo.isDeleted === "true" ? true : false,
        isActive: this.state.userInfo.isActive === "true" ? true : false,
      },
      id
    );
  };

  render() {
    return (
      <>
        <div className="container AddLocationContainer1">
          {this.props.data ? (
            <Row>
              <Col lg="12">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.onSubmit(this.state.userInfo?.id);
                  }}
                >
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="formLabelStyle1">
                          Keyy
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="keyy"
                          value={this.state.userInfo?.keyy}
                          onChange={(e) => this.handleChange(e)}
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
                          name="locName"
                          value={this.state.userInfo?.locName}
                          onChange={(e) => this.handleChange(e)}
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
                          name="locType"
                          value={this.state.userInfo?.locType}
                          onChange={(e) => this.handleChange(e)}
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
                          name="locSubType"
                          value={this.state.userInfo?.locSubType}
                          onChange={(e) => this.handleChange(e)}
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
                          name="locDesc"
                          value={this.state.userInfo?.locDesc}
                          onChange={(e) => this.handleChange(e)}
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
                          name="locNameLong"
                          value={this.state.userInfo?.locNameLong}
                          onChange={(e) => this.handleChange(e)}
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
                          pattern="^\d+$"
                          type="text"
                          name="locRefId"
                          value={this.state.userInfo?.locRefId}
                          onChange={(e) => this.handleChange(e)}
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
                          name="locRefIdType"
                          value={this.state.userInfo?.locRefIdType}
                          onChange={(e) => this.handleChange(e)}
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
                          pattern="^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$"
                          type="text"
                          required
                          name="coordLonLat"
                          value={this.state.userInfo?.coordLonLat}
                          onChange={(e) => this.handleChange(e)}
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
                          name="addrState"
                          value={this.state.userInfo?.addrState}
                          onChange={(e) => this.handleChange(e)}
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
                          name="county"
                          value={this.state.userInfo?.county}
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="formLabelStyle1">
                          Notes
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="notes"
                          value={this.state.userInfo?.notes}
                          onChange={(e) => this.handleChange(e)}
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
                          name="dataCleanseLevel"
                          value={this.state.userInfo?.dataCleanseLevel}
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="formLabelStyle1">
                          Is Active
                        </Form.Label>
                        <Form.Select
                          name="isActive"
                          value={this.state.userInfo?.isActive}
                          onChange={(e) => this.handleChange(e)}
                        >
                          <option value="true">True</option>
                          <option value="false">False</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="formLabelStyle1">
                          Is Deleted
                        </Form.Label>
                        <Form.Select
                          name="isDeleted"
                          value={this.state.userInfo?.isDeleted}
                          onChange={(e) => this.handleChange(e)}
                          aria-label="Default select example"
                        >
                          <option value="true">True</option>
                          <option value="false">False</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="formLabelStyle1">
                          Updated By
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="updated_by"
                          value={this.state.userInfo?.updated_by}
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className="formLabelStyle1">
                          DQ Status
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter DQ Status"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button type="submit" variant="secondary">
                    Save
                  </Button>
                </Form>
              </Col>
            </Row>
          ) : (
            <p>Loading......</p>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  updateLocationDetail: state.updateLocationDetail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocationDetails: (data, id) =>
      dispatch(updateLocationDetails(data, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateModal);
