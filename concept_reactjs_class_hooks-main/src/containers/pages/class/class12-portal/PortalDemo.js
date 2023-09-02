import React from 'react'
import ReactDOM from 'react-dom'

// // React Portal provide way to render children into a dom node that exist outside dom Hierarchy of parent component.
// // see index.html in public folder (public/index.html)
function PortalDemo() {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.getElementById('portal-root')
	)
}

export default PortalDemo
