import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserForm from './form';
import UserInfoPopup from './popup';

const initialState = {
  userInfo: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleSave = () => {
    setShowUserInfo(true);

   
  };

  return (
    <Provider store={store}>
      <div>
        {!showUserInfo && <UserForm onSave={handleSave} />}
        {showUserInfo && <UserInfoPopup />}
      </div>
    </Provider>
  );
};

export default App;

