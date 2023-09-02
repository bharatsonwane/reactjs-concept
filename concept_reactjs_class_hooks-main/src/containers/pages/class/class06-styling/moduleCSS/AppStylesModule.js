import React, { Component } from 'react'
import mdl from './appStylesModule.module.css'

class AppStylesModule extends Component {
    render() {
        return (
            <div>
                <h1 className={mdl.success}>Success</h1>
            </div>
        )
    }
}

export default AppStylesModule
