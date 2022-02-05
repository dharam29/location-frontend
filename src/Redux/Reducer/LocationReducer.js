import * as Location from "../constant";

const initialState = {
  getLocation: {},
  addLocation: {},
  deleteLocationDetail: [],
  searchLocationDetail: "",
  loctionDetailsList: [],
  updateLocationDetail: "",
};

function LocationReducer(state = initialState, action) {
  switch (action.type) {
    case Location.LOCATION_ACTION: {
      return {
        ...state,
        getLocation: action.payload,
      };
    }
    case Location.LOCATION_ACTION_CREATE: {
      return {
        ...state,
        addLocation: action.payload,
      };
    }

    case Location.LOCATION_ACTION_DELETE: {
      return {
        ...state,
        deleteLocationDetail: action.payload,
      };
    }

    case Location.LOCATION_ACTION_SEARCH: {
      return {
        ...state,
        searchLocationDetail: action.payload,
      };
    }
    case Location.LOCATION_ACTION_UPDATE: {
      return {
        ...state,
        updateLocationDetail: action.payload,
      };
    }

    default:
      return state;
  }
}

export default LocationReducer;
