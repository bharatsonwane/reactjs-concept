import React, { Component } from 'react'
import ClickCounterTwo from './ClickCounterTwo'
import Counter from './Counter'
import HoverCounterTwo from './HoverCounterTwo'
import User from './User'

class AppC15 extends Component {
    render() {
        return (
            <div>
                {/* <ClickCounterTwo />
                <HoverCounterTwo /> */}
                {/* <User name={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> */}
                {/* <User render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> */}
                <Counter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />
                <Counter render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} />
            </div>
        )
    }
}

export default AppC15
