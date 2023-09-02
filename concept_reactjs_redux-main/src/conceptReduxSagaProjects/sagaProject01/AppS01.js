// // // npm install redux react-redux
import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux-store/store'
import CakeContainer from './containers/pages/cakePages/CakeContainer';
import CakeContainerHooks from './containers/pages/cakePages/CakeContainerHooks'; // useSelector & useDispatch
import IceCreamContainer from './containers/pages/iceCreamPages/IceCreamContainer';
import IceCreamContainerHooks from './containers/pages/iceCreamPages/IceCreamContainerHooks'; // useSelector & useDispatch

function AppS01() {
  return (
    <Provider store={store} >
      <div className="App">
        <CakeContainer />
        <CakeContainerHooks />
        <h2 style={{ color: 'red' }}>==================================</h2>
        <IceCreamContainer />
        <IceCreamContainerHooks />
      </div>
    </Provider>
  );
}

export default AppS01



