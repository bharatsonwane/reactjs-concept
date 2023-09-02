import React, { Component } from 'react'
import Greet from './props1ParentToChild/Greet'
import Welcome from './props1ParentToChild/Welcome'
import GreetPropsFunction from './props1ParentToChild/GreetPropsFunction'
import WelcomePropsClass from './props1ParentToChild/WelcomePropsClass'
import Parent1 from './props1ParentToChild/porpsParentToChildDynamic/Parent1'

export class Props1ParentToChild extends Component {


    render() {
        return (
            <div>
                <Greet name="Bruce" heroName="Batman"> This is G Children props </Greet>
                <Greet name="Clark" heroName="Superman"> <button>Action</button> </Greet>
                <Greet name="Diana" heroName="Wonder Woman" />
                <h1>----------------------------------------------------------</h1>
                <Welcome name="Bruce" heroName="Batman"> This is W Children props </Welcome>
                <Welcome name="Clark" heroName="Superman"> <button>Action</button> </Welcome>
                <Welcome name="Diana" heroName="Wonder Woman" />
                <h1>----------------------------------------------------------</h1>
                <Parent1 />
                <h1>----------------------------------------------------------</h1>
                <GreetPropsFunction name="Bruce" heroName="BatMan">This is GP Children tag</GreetPropsFunction>
                <GreetPropsFunction name="Clark" heroName="Superman" />
                <GreetPropsFunction name="Diana" heroName="Wonder Woman" /><br />
                <h1><strong>----------------------------------------------------------</strong></h1>
                <WelcomePropsClass name="Bruce" heroName="BatMan">This is WP Children tag</WelcomePropsClass>
                <WelcomePropsClass name="Clark" heroName="Superman" />
                <WelcomePropsClass name="Diana" heroName="Wonder Woman" />
                <h1>----------------------------------------------------------</h1>
            </div>
        )
    }
}

export default Props1ParentToChild
