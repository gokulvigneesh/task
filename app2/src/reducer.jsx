const initialState = {
  userInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer