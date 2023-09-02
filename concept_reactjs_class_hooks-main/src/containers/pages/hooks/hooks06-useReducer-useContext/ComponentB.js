import React from 'react'
import ComponentD from './ComponentD'

function ComponentB() {
	return (
		<React.Fragment>
			Component B<ComponentD />
		</React.Fragment>
	)
}

export default ComponentB