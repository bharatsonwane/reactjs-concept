import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'


class AppC16 extends Component {
    render() {
        return (
            <div>
                <UserProvider value="Vishwas">
                    <ComponentC />
                </UserProvider>

                {/* <ComponentC /> */}
            </div>
        )
    }
}

export default AppC16
