import * as location_info from "../constant";

export const getLocationDetails = (offset, search) => {
  return async (dispatch) => {
    const data = await fetch(
      `https://location-assignment.herokuapp.com/api/v1/location?offset=${offset}&search=${
        search || ""
      }`
    );
    const result = await data.json();
    dispatch({
      type: location_info.LOCATION_ACTION,
      payload: result,
    });
    return result;
  };
};

export const addLocationDetails = (e) => {
  return (dispatch) => {
    const result = {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(e),
    };
    return fetch(
      `https://location-assignment.herokuapp.com/api/v1/location`,
      result
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: location_info.LOCATION_ACTION_CREATE,
          payload: data,
        });
      });
  };
};

export const deleteLocationDetails = (id) => {
  return async (dispatch) => {
    fetch(`https://location-assignment.herokuapp.com/api/v1/location/` + id, {
      method: "delete",
    }).then((data) => {
      dispatch({
        type: location_info.LOCATION_ACTION_DELETE,
        payload: data,
      });
    });
  };
};

export const updateLocationDetails = (data, id) => {
  return async (dispatch) => {
    const newData = { ...data };
    delete newData.id;
    delete newData.createdBy;
    delete newData.createdOn;
    delete newData.updatedOn;
    const result = {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    };
    fetch(
      `https://location-assignment.herokuapp.com/api/v1/location/` + id,
      result
    ).then((data) => {
      dispatch({
        type: location_info.LOCATION_ACTION_UPDATE,
        payload: data,
      });
    });
  };
};
