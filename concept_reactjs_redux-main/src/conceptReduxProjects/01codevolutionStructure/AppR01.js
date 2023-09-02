// // // npm install redux react-redux
// 1st time flow #=> reducer ==> store ==>  mapStateToProps + MapDispatchToProps + jsx Element function render ==> react App (UI)
// for action flow #=> MapDispatchToProps ==> action ==> reducer ==> store ==> mapStateToProps + jsx Element function render  ==> react App (UI)
// //-----------------------------------------------------------

import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './containers/pages/cakePages/CakeContainer';
import CakeContainerHooks from './containers/pages/cakePages/CakeContainerHooks'; // useSelector & useDispatch
import IceCreamContainer from './containers/pages/iceCreamPages/IceCreamContainer';
import IceCreamContainerHooks from './containers/pages/iceCreamPages/IceCreamContainerHooks';

function AppR01() {
  return (
    <Provider store={store} >
      <h1 style={{ color: 'orange' }}><i>Codevolution Structure</i></h1>
      <div className="App">
        <CakeContainer />
        <CakeContainerHooks />
        <h3>------------------------------------------------------</h3>
        <IceCreamContainer />
        <IceCreamContainerHooks />
      </div>
    </Provider>
  );
}

export default AppR01;
