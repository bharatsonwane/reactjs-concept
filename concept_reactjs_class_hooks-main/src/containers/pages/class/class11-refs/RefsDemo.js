import React, { Component } from 'react'

export class RefsDemo extends Component {
	constructor(props) {
		super(props)
		// // 1st approach to creat ref
		this.inputRef = React.createRef()

		// // 2nd (older) approach to creat ref
		this.cbRef = null
		this.setCbRef = element => {
			this.cbRef = element
		}
	}

	componentDidMount() {
		// // 1st ref
		this.inputRef.current.focus()

		// // 2nd ref
		// console.log(this.cbRef)
		// if (this.cbRef) {
		// 	this.cbRef.focus()
		// }
	}

	clickHandler = () => {
		alert(this.inputRef.current.value)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} placeholder='1st (new) aproach' />
				<input type="text" ref={this.setCbRef} placeholder='2nd (older) aproach' />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default RefsDemo
