// // // npm install redux react-redux
// 1st time flow #=> reducer ==> store ==>  mapStateToProps + MapDispatchToProps + jsx Element function render ==> react App (UI)
// for action flow #=> MapDispatchToProps ==> action ==> reducer ==> store ==> mapStateToProps + jsx Element function render  ==> react App (UI)
// other flow depend on sequesce of import
// // -----------------------------------------------------------

import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux-store/store'
import CakeContainer from './containers/pages/cakePages/CakeContainer';
import CakeContainerHooks from './containers/pages/cakePages/CakeContainerHooks'; // useSelector & useDispatch
import IceCreamContainer from './containers/pages/iceCreamPages/IceCreamContainer';
import IceCreamContainerHooks from './containers/pages/iceCreamPages/IceCreamContainerHooks'


function AppR02() {
  console.log('App02')
  return (
    <Provider store={store}>
      <h1 style={{ color: 'orange' }}><i>Eteva Structure</i></h1>
      <div className="App">
        <CakeContainer />
        <CakeContainerHooks />
        <h3>-------------------------------</h3>
        <IceCreamContainer />
        <IceCreamContainerHooks />
      </div>
    </Provider>
  );
}

export default AppR02;


// Import "Provider" from "react-redux" library  ==>   "Provider" accepts our "store"
// import "store" from "store.js" file
//  Connect hole "application" with react "store" with the help of "Provider" 

// we import "store" & in that "store.js" we imported "rootReducers.js" so all reducers are available at starting.
// in diffrent "reducers" diffrent "action creator" are imported so all action creator are available at starting.
 