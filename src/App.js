import React, { useState } from 'react'
import './App.css'
import HomeWorkTwo from './HomeWorkTwo/HomeWorkTwo'
import { data } from './HomeWorkTwo/data'

function App() {
	const [list, setList] = useState(data)
	const [input, setInput] = useState('')

	const getInput = e => {
		setInput(e)
	}

	const deleteElm = ind => {
		console.log(ind)
		const updateElm = list.filter((elm, index) => index !== ind)
		setList(updateElm)
	}

	const addToDo = () => {
		if (input && !list.includes(input)) {
			const addToDoObj = [...list, input]
			setList(addToDoObj)
			setInput('')
		}
	}

	return (
		<div>
			{/* <MyClassComponent />
			<MyFunctionalComponent />
			<HooksPractice /> */}

			<HomeWorkTwo
				addToDo={addToDo}
				getInput={getInput}
				list={list}
				input={input}
				deleteElm={deleteElm}
			/>
		</div>
	)
}

export default App
