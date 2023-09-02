import React, { Component } from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundary'

// // Error boundaries provide a way to gracefully handle the error in application code.
// // Error boundaries are React coponents that catch JavaScript error in their child component tree, log those errors, and display a fall-back UI.
// // A class component becomes an Error Boundary by defining either or both of getDerivedStateFRomError and componentDidCatch lifecycle methods.
// // The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.
class AppC13 extends Component {
    render() {
        return (
            <div>
                {/* <Hero heroName="Batman" />
                <Hero heroName="Superman" />
                <Hero heroName="Superman" /> */}

                <h1>------------------------</h1>

                {/* <ErrorBoundary >
                    <Hero heroName="Batman" />
                    <Hero heroName="Superman" />
                    <Hero heroName="Superman" />
                </ErrorBoundary> */}

                <h1>------------------------</h1>

                <ErrorBoundary >
                    <Hero heroName="Batman" />
                </ErrorBoundary>
                <ErrorBoundary >
                    <Hero heroName="Superman" />
                </ErrorBoundary>
                <ErrorBoundary >
                    <Hero heroName="Joker" />
                </ErrorBoundary>

            </div>
        )
    }
}

export default AppC13
