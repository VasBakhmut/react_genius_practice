import React, { useEffect, useState } from 'react'

function Useeffect() {
	const [count, setCount] = useState(0)
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		document.title = `You clicked ${count} times`
	}, [count])
	return (
		<div>
			{' '}
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<p>Seconds elapsed: {seconds}</p>
		</div>
	)
}

export default Useeffect
