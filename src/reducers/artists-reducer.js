const initialState = {
  currentArtist: null,
  status: "idle",
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_DATA": {
      return {
        ...state,
        status: "loading ",
      };
    }

    case "RECEIVE_ARTIST_DATA": {
      return {
        ...state,
        currentArtist: {
          profile: action.data,
        },
        status: "idle",
      };
    }

    default: {
      return state;
    }
  }
}
