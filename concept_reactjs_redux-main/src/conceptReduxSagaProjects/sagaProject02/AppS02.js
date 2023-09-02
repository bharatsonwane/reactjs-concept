import React from 'react'
import { Provider } from 'react-redux'
import UserContainerComponentMountingClass from './containers/pages/UserContainerComponentMountingClass'
import UserContainerComponentMountingHooks from './containers/pages/UserContainerComponentMountingHooks'
import UserContainerOnClickClass from './containers/pages/UserContainerOnClickClass'
import UserContainerOnClickHook from './containers/pages/UserContainerOnClickHook'
import store from './Redux-store/store'

function AppS02() {
    return (
        <Provider store={store}>
            {/* <UserContainerComponentMountingClass /> */}
            {/* <UserContainerComponentMountingHooks /> */}
            {/* <UserContainerOnClickClass /> */}
            <UserContainerOnClickHook />
        </Provider>
    )
}

export default AppS02
