import { createStore } from 'redux';

let store;

let storeCreate = function (reducer) {
  store = createStore(reducer);

  return store;
};

let getStore =  function (reducer) {
  if (store) {
    return store;
  } else {
    return storeCreate(reducer);
  }
};

module.exports = {
  getStore
}
