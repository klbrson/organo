import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {
	
	

	const onChanges = (event) => {
		props.onInput(event.target.value)
	}
	
	return (
		<div className="field-text">
			<label> {props.label}</label>
			<input value={props.value} onChange={onChanges} required={props.required} placeholder={props.placeholder}/>
		</div>
	)
}

export default TextField