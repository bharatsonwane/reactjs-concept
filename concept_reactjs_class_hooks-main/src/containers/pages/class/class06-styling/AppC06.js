import React, { Component } from 'react'
import './globalCSS/GlobalStylesheet'
import mdl from './moduleCSS/appStylesModule.module.css'
import AppStylesModule from './moduleCSS/AppStylesModule'
import Inline from './inlineCSS/Inline'


export class AppC06 extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className={mdl.success}>AppC06 Success</h1>
                <AppStylesModule/>
                <Inline />
                
            </React.Fragment>
        )
    }
}

export default AppC06
