import React, { Component } from 'react'
import FRInput from './FRInput'

// // forwording Ref ==> ref is forworded from parent component to native input element
export class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

	render() {
		return (
			<div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input (click to focus)</button>
			</div>
		)
	}
}

export default FRParentInput
