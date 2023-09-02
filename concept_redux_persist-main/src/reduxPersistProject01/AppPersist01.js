import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from "./Redux-store/store"
import { PersistGate } from "redux-persist/integration/react";
import UserContainer from "./containers/UserContainer"

function AppPersist01() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <UserContainer />
            </PersistGate>
        </Provider>
    )
}

export default AppPersist01
