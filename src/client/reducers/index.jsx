import { combineReducers } from "redux";

const checkBox = (store, action) => {
  if (action.type === "TOGGLE_CHECK") {
    return {
      checked: !store.checked
    };
  }

  return store || { checked: false };
};

const number = (store, action) => {
  if (action.type === "INC_NUMBER") {
    return {
      value: store.value + 1
    };
  } else if (action.type === "DEC_NUMBER") {
    return {
      value: store.value - 1
    };
  }

  return store || { value: 0 };
};

const names = (store = [], action) => {
  switch (action.type) {
    case 'SAVE_NAME':
      return [...store, action.name];
  }

  return store;
};

export default combineReducers({
  checkBox,
  number,
  names
});
