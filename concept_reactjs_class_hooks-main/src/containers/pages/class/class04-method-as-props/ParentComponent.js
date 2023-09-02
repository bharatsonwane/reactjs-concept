import React, { Component } from 'react'
import ChildComponent from "./ChildComponent"

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    // greetParent() {
    //     alert(`Hello ${this.state.parentName}`)
    // }

    greetParent(childName1, childName2) {
        alert(`Hello ${this.state.parentName} from Child and ${childName1} and ${childName2}`)
    }



    render() {
        return (
            <div>
                <ChildComponent greetHanlder={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
