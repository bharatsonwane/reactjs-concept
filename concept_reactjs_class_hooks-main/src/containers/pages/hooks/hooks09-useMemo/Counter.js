import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
	}

	/**
	 * @description Performance Hooks ==> useCallback && useMemo
	 * @description useCallback returns a memoized callback function, while useMemo returns a memoized value.
	 * @description for useMome no need to call we can access directly as normal variabl 
	 * for useCallback return a fuction & we have to call it 
	 */
	const isEven = useMemo(() => {
		console.log("useMemo runs when counterOne change")
		let i = 0
		while (i < 2000000000) i++
		return counterOne % 2 === 0
	}, [counterOne])

	return (
		<div>
			<div>
				<button onClick={() => incrementOne()}>Count One - {counterOne}</button>
				<span>{isEven ? 'Even' : 'Odd'}</span>
			</div>
			<div>
				<button onClick={() => incrementTwo()}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter
