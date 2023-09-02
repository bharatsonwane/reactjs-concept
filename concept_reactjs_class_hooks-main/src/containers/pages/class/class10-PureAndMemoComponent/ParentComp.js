import React, { Component, Pure } from 'react'
import RegComp from './resource/RegComp'
import PureComp from './resource/PureComp'
import MemoComp from './resource/MemoComp'

class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Vishwas'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Vishwas'
			})
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
				<RegComp name={this.state.name} />
				<h4>--------------------------</h4>
				<PureComp name={this.state.name} />
				<h4>--------------------------</h4>
				<MemoComp name={this.state.name} />
			</div>
		)
	}
}

export default ParentComp
