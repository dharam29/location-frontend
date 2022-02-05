//add location ravindra

import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import { CardBody, CardHeader, Input, Label } from "reactstrap";
import {
  addLocationDetails,
  deleteLocationDetails, getLocationDetails
} from "../Redux/Action/LocationAction";
import "./location.css";
import * as Yup from "yup";

function AddLocation(props) {
  const navigate = useNavigate()
  return (
    <>
      <div className="container AddLocationContainer">
        <Card>
          <CardHeader className="cardHeaderStyle">
            <h3>Add Location</h3>
            <Link to="/">
              <Button
                variant="primary"
                className="float-right mt-n1 buttonLocation"
              >
                <FontAwesomeIcon icon={faList} />
                &nbsp; Location List
              </Button>
            </Link>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                keyy: "",
                locationName: "",
                locationType: "",
                locationSubType: "",
                locationDescripation: "",
                locationLongitude: "",
                locationReferenceID: "",
                locationReferenceIDType: "",
                coordinate: "",
                addressCounty: "",
                addressState: "",
                dataCleanseLevel: "",
                notes: "",
                isActive: "",
                isDeleted: "",
                createdBy: "",
                updatedBy: "",
                dqStatus: "",
              }}
              validationSchema={Yup.object().shape({
                keyy: Yup.string().required("Keyy is required"),
                locationName: Yup.string().required(
                  "Location name is required"
                ),
                locationType: Yup.string().required(
                  "Location type is required"
                ),
                locationSubType: Yup.string().required(
                  "Location sub type is required"
                ),
                locationDescripation: Yup.string().required(
                  "Location description is required"
                ),
                locationLongitude: Yup.string().required(
                  "Location longitude is required"
                ),
                locationReferenceID: Yup.string().required(
                  "Location reference id is required"
                ),
                locationReferenceIDType: Yup.string()
                  .max(25)
                  .required("Location reference id type is required"),
                addressCounty: Yup.string().required(
                  "Address county is required"
                ),
                addressState: Yup.string()
                  .max(25)
                  .required("Address state is required"),
                coordinate: Yup.string()
                  .required("Coordinate is required")
                  .matches(
                    /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
                  ),
                dataCleanseLevel: Yup.number().required(
                  "Data cleanse level is required"
                ),
                notes: Yup.string().required("Notes is required"),
                isActive: Yup.string().required("Is active is required"),
                isDeleted: Yup.string().required("Is deleted is required"),
                createdBy: Yup.string().required("Created by is required"),
                updatedBy: Yup.string()
                  .max(100)
                  .required("Updated by is required"),
                dqStatus: Yup.string()
                  .max(25)
                  .required("DQ status is required"),
              })}
              onSubmit={async (fields) => {
                let payload = {
                  keyy: fields.keyy,
                  locName: fields.locationName,
                  locType: fields.locationType,
                  locSubType: fields.locationSubType,
                  locDesc: fields.locationDescripation,
                  locNameLong: fields.locationLongitude,
                  locRefId: fields.locationReferenceID,
                  locRefIdType: fields.locationReferenceID,
                  coordLonLat: fields.coordinate,
                  addrState: fields.addressState,
                  county: fields.addressCounty,
                  notes: fields.notes,
                  dqStatus:fields.dqStatus,
                  dataCleanseLevel: fields.dataCleanseLevel,
                  isActive: true,
                  isDeleted: false,
                  created_by: fields.createdBy,
                  updated_by: fields.updatedBy,
                };

                let check = await props
                  .addLocationDetails(payload)
                  .then((res) => {
                    navigate("/");
                  });
              }}
              render={({ errors, status, touched, handleSubmit }) => (
                <Row>
                  <Col lg="12">
                    <form onSubmit={handleSubmit}>
                      {/* First Row */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="keyy">Keyy</label>
                            <Field
                              name="keyy"
                              type="text"
                              placeholder="Enter Keyy"
                              className={
                                "form-control" +
                                (errors.keyy && touched.keyy
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="keyy"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="locationName">Location Name</label>
                            <Field
                              name="locationName"
                              placeholder="Enter Location Name"
                              type="text"
                              className={
                                "form-control" +
                                (errors.locationName && touched.locationName
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="locationName"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>
                      {/* 2nd */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="locationType">Location Type</label>
                            <Field
                              name="locationType"
                              type="text"
                              placeholder="Enter Location Type"
                              className={
                                "form-control" +
                                (errors.locationType && touched.locationType
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="locationType"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="locationSubType">
                              Location Sub Type
                            </label>
                            <Field
                              name="locationSubType"
                              placeholder="Enter Location Sub Type"
                              type="text"
                              className={
                                "form-control" +
                                (errors.locationSubType &&
                                touched.locationSubType
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="locationSubType"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>
                      {/* 3rd */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="locationDescripation">
                              {" "}
                              Location Descripation
                            </label>
                            <Field
                              name="locationDescripation"
                              type="text"
                              placeholder="Enter Location Descripation"
                              className={
                                "form-control" +
                                (errors.locationDescripation &&
                                touched.locationDescripation
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="locationDescripation"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="locationLongitude">
                              Location Longitude
                            </label>
                            <Field
                              name="locationLongitude"
                              placeholder="Enter  Location Longitude"
                              type="text"
                              className={
                                "form-control" +
                                (errors.locationLongitude &&
                                touched.locationLongitude
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="locationLongitude"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>

                      {/* 4th */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="locationReferenceID">
                              {" "}
                              Location ReferenceID
                            </label>
                            <Field
                              name="locationReferenceID"
                              type="text"
                              placeholder="Enter Location ReferenceID"
                              className={
                                "form-control" +
                                (errors.locationReferenceID &&
                                touched.locationReferenceID
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="locationReferenceID"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="locationReferenceIDType">
                              Location ReferenceID Type
                            </label>
                            <Field
                              name="locationReferenceIDType"
                              placeholder="Enter Location ReferenceID Type  (max 25 characters)"
                              type="text"
                              className={
                                "form-control" +
                                (errors.locationReferenceIDType &&
                                touched.locationReferenceIDType
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="locationReferenceIDType"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>

                      {/* 5th */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="addressCounty">
                              {" "}
                              Address County
                            </label>
                            <Field
                              name="addressCounty"
                              type="text"
                              placeholder="Enter Address County"
                              className={
                                "form-control" +
                                (errors.addressCounty && touched.addressCounty
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="addressCounty"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="addressState">Address State</label>
                            <Field
                              name="addressState"
                              placeholder="Enter Address State (max 25 characters)"
                              type="text"
                              className={
                                "form-control" +
                                (errors.addressState && touched.addressState
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="addressState"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>

                      {/* 6th */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <Label for="isActive">Is Active</Label>
                            <Field name="isActive">
                              {({ field, meta }) => (
                                <Input
                                  {...field}
                                  type="select"
                                  name="isActive"
                                  id
                                  className={
                                    "form-control" +
                                    (errors.isActive && touched.isActive
                                      ? " is-invalid"
                                      : "")
                                  }
                                  id="isActive"
                                >
                                  <option value="">Select</option>
                                  <option value="true">True</option>
                                  <option value="false">False</option>
                                </Input>
                              )}
                            </Field>
                            <ErrorMessage
                              name="isActive"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <Label for="isDeleted">Is Deleted</Label>
                            <Field name="isDeleted">
                              {({ field, meta }) => (
                                <Input
                                  {...field}
                                  type="select"
                                  name="isDeleted"
                                  id
                                  className={
                                    "form-control" +
                                    (errors.isDeleted && touched.isDeleted
                                      ? " is-invalid"
                                      : "")
                                  }
                                  id="isDeleted"
                                >
                                  <option value="">Select</option>
                                  <option value="true">True</option>
                                  <option value="false">False</option>
                                </Input>
                              )}
                            </Field>
                            <ErrorMessage
                              name="isDeleted"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>
                      {/* 7th */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="createdBy">Created By</label>
                            <Field
                              name="createdBy"
                              type="text"
                              placeholder="Enter Created By"
                              className={
                                "form-control" +
                                (errors.createdBy && touched.createdBy
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="createdBy"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="updatedBy">Updated By</label>
                            <Field
                              name="updatedBy"
                              type="text"
                              placeholder="Enter Updated By"
                              className={
                                "form-control" +
                                (errors.updatedBy && touched.updatedBy
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="updatedBy"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>

                      {/* 9th */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="coordinate">
                              Coordinate(Lat, Long)
                            </label>
                            <Field
                              name="coordinate"
                              placeholder="Enter Coordinate(Lat, Long)"
                              type="text"
                              className={
                                "form-control" +
                                (errors.coordinate && touched.coordinate
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="coordinate"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="dataCleanseLevel">
                              Data Cleanse Level
                            </label>
                            <Field
                              name="dataCleanseLevel"
                              placeholder="Enter Data Cleanse Level"
                              type="number"
                              className={
                                "form-control" +
                                (errors.dataCleanseLevel &&
                                touched.dataCleanseLevel
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="dataCleanseLevel"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>
                      {/* 10th */}
                      <Row className="formRows">
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="notes">Notes</label>
                            <Field
                              name="notes"
                              type="text"
                              placeholder="Enter Notes"
                              className={
                                "form-control" +
                                (errors.notes && touched.notes
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="notes"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form-group">
                            <label htmlFor="dqStatus">DQ Status</label>
                            <Field
                              name="dqStatus"
                              type="text"
                              placeholder="Enter DQ Status"
                              className={
                                "form-control" +
                                (errors.dqStatus && touched.dqStatus
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="dqStatus"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Button
                        type="submit"
                        className="addLocationButton mt-5 mb-3"
                        variant="primary"
                      >
                        Add Location
                      </Button>
                    </form>
                  </Col>
                </Row>
              )}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  getLocation: state.location.getLocation,
  addLocation: state.addLocation,
  deleteLocationDetail: state.deleteLocationDetail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLocationDetails: () => dispatch(getLocationDetails()),
    addLocationDetails: (data) => dispatch(addLocationDetails(data)),
    deleteLocationDetails: (id) => dispatch(deleteLocationDetails(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);
