const initialState = {
  playerName: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYERSEARCH": {
      return {
        ...state,
        playerName: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
