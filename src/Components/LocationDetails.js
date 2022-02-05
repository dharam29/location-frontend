import {
  faEdit,
  faEye,
  faPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";
import Pagination from "react-bootstrap-4-pagination";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CardBody, CardHeader } from "reactstrap";
import {
  addLocationDetails,
  deleteLocationDetails,
  getLocationDetails,
} from "../Redux/Action/LocationAction";
import "./location.css";
import UpdateModal from "./UpdateModal";
import ViewModal from "./ViewModal";

const mdSize = {
  totalPages: 10,
  currentPage: 1,
  showMax: 5,
  threeDots: true,
  prevNext: true,
};

class LocationDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationdeatail: "",
      modalOpen: false,
      updateModal: false,
      currentViewData: [],
      currentUpdateData: [],
      testing: null,
      dataCount: 0,
      offset: 0,
      page: 1,
      search: "",
    };
  }
  componentDidMount = async () => {
    const data = await this.props.getLocationDetails(this.state.offset);
    this.setState({
      locationdeatail: data.data,
      dataCount: data.count,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      const data = await this.props.getLocationDetails(
        this.state.offset,
        this.state.search
      );
      this.setState({
        locationdeatail: data.data,
        dataCount: data.count,
      });
    }
  }

  testing = async () => {
    let check = await this.props.getLocationDetails();
    this.setState({
      testing: check,
    });
  };

  deleteLocationData = async (id) => {
    let check = await this.props.deleteLocationDetails(id);

    // await this.props.getLocationDetails();
    this.updatePage();
  };

  handleView = (data) => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      currentViewData: data,
    });
  };

  handleEdit = (data) => {
    this.setState({
      updateModal: !this.state.updateModal,
      currentUpdateData: data,
    });
  };

  handleSearch = (e) => {
    let check = e.target.value;
  };

  getTotalPages = () => {
    return Math.ceil(this.state.dataCount / 5);
  };

  changePage = async (page) => {
    this.setState({
      page,
    });

    const offset = (page - 1) * 5;
    const data = await this.props.getLocationDetails(offset);

    this.setState({
      locationdeatail: data.data,
      dataCount: data.count,
    });
  };

  updatePage = async () => {
    this.setState({ updateModal: false })
    
    setTimeout(async() => {
      const data = await this.props.getLocationDetails(
        this.state.offset,
        this.state.search
      );
      this.setState({
        locationdeatail: data.data,
        dataCount: data.count,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="locationContainer">
        <Card className="locationCard">
          <div className="childContainer">
            <CardHeader className="locationHeader">
              <div className="searchButton">
                <div className="mainStyle">
                  <div className="form-group has-search">
                    <FontAwesomeIcon
                      className="fa fa-search form-control-feedback"
                      icon={faSearch}
                    />
                    <input
                      type="text"
                      value={this.state.search}
                      className="form-control"
                      placeholder="Search"
                      onChange={(e) =>
                        this.setState({ search: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                <Link to="/addLocation">
                  <Button className="addLocationButton" variant="primary">
                    <FontAwesomeIcon
                      className="fa fa-search form-control-feedback"
                      icon={faPlus}
                    />{" "}
                    Add Location
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardBody className="locationCardBody">
              {this.state.locationdeatail ? (
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Keyy</th>
                        <th>LocationName</th>
                        <th>LoctionType</th>
                        <th>LocationSubType</th>
                        <th>LocationState</th>
                        <th>Country</th>
                        <th>Is Deleted</th>
                        <th>Is Active</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.locationdeatail?.length > 0 ? (
                        this.state.locationdeatail.map((item, i) => (
                          <tr>
                            <td>{item.keyy}</td>
                            <td>{item.locName}</td>
                            <td>{item.locType}</td>
                            <td>{item.locSubType}</td>
                            <td>{item.addrState}</td>
                            <td>{item.county}</td>
                            <td>{item.isDeleted?.toString()}</td>
                            <td>{item.isActive?.toString()}</td>
                            <td>
                              <div className="iconsStyle">
                                <FontAwesomeIcon
                                  title="View"
                                  className="faEyeStyle"
                                  icon={faEye}
                                  onClick={() => this.handleView(item)}
                                />
                                <FontAwesomeIcon
                                  title="Edit"
                                  className="faEditStyle"
                                  icon={faEdit}
                                  onClick={() => this.handleEdit(item)}
                                />
                                <FontAwesomeIcon
                                  title="Delete"
                                  className="faTrashStyle"
                                  icon={faTrash}
                                  onClick={() =>
                                    this.deleteLocationData(item.id)
                                  }
                                />
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr style={{ textAlign: "center" }}>
                          <td colSpan={9}>No records found.</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              ) : (
                <p>Loading.....</p>
              )}

              <div className="paginationDiv">
                {this.state.dataCount > 5 ? (
                  <Pagination
                    totalPages={this.getTotalPages()}
                    currentPage={this.state.page}
                    showMax={3}
                    threeDots={true}
                    prevNext={true}
                    // {...mdSize}
                    onClick={(page) => this.changePage(page)}
                    shadow
                    className="paginationStyle"
                  />
                ) : null}
              </div>
            </CardBody>
          </div>
        </Card>
        <div>
          <Modal
            show={this.state.modalOpen}
            onHide={() => this.setState({ modalOpen: false })}
          >
            <Modal.Header closeButton>
              <Modal.Title>View Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ViewModal data={this.state.currentViewData} />
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => this.setState({ modalOpen: false })}
                variant="secondary"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <Modal
          show={this.state.updateModal}
          onHide={() => this.setState({ updateModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateModal closeModal={() => this.updatePage()} data={this.state.currentUpdateData} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getLocation: state.location.getLocation,
  addLocation: state.addLocation,
  deleteLocationDetail: state.deleteLocationDetail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLocationDetails: (offset, search) =>
      dispatch(getLocationDetails(offset, search)),
    addLocationDetails: (data) => dispatch(addLocationDetails(data)),
    deleteLocationDetails: (id) => dispatch(deleteLocationDetails(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
