import React from 'react'
import "./globalStyles.css"

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ""
    return (
        <div>
            {/* <h1 className="primary">Stylesheet</h1> */}

            {/* using props as conditiion for css */}
            {/* <h1 className= {className} >Stylesheet</h1> */}

            <h1 className= {`${className} font-xl`} >Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
