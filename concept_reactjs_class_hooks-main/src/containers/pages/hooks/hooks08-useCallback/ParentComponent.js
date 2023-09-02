import React, { useState, useCallback } from 'react'
import Count from './resource/Count'
import Button from './resource/Button'
import Title from './resource/Title'

function ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)


	/**
	 * @description Performance Hooks ==> useCallback && useMemo
	 * @description useCallback returns a memoized callback function, while useMemo returns a memoized value.
	 * @description for useCallback return a fuction & we have to call it 
	 * but for useMemo no need to call we can access directly as normal variabl
	 */	
	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])


	/**
	 * @description Performance Hooks ==> useCallback && useMemo
	 * @description useCallback returns a memoized callback function, while useMemo returns a memoized value.
	 * @description for useCallback return a fuction & we have to call it 
	 * but for useMemo no need to call we can access directly as normal variabl
	 */		
	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={() => incrementAge()}>Increment Age</Button>
			<h1>-----------------------------------------------</h1>
			<Count text="Salary" count={salary} />
			<Button handleClick={()=> incrementSalary()}>Increment Salary</Button>
		</div>
	)
}

export default ParentComponent
