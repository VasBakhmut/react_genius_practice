import React from 'react'
import classes from './HomeWorkTwo.module.css'

function HomeWorkTwo({ getInput, list, input, addToDo, deleteElm }) {
	return (
		<div className={classes.container}>
			<span>Input</span>
			<input
				type='text'
				value={input}
				onChange={e => getInput(e.target.value)}
			/>
			<p>{list.length}</p>
			<ul className={classes.ulContainer}>
				{list?.map((toDo, index) => {
					return (
						<>
							<li key={index} className={classes.liContainer}>
								<h3>{toDo}</h3>
								<button
									onClick={() => deleteElm(index)}
									className={classes.btn_dlt}
								>
									delete
								</button>
							</li>
						</>
					)
				})}
			</ul>
			<button onClick={addToDo}>Add TO DO</button>
		</div>
	)
}

export default HomeWorkTwo
