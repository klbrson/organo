import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import Dropdown from '../dropdown'
import './Form.css'

const Form = (props) => {
	const [name, setName] = useState('')
	const [cargo, setCargo] = useState('')
	const [image, setImage] = useState('')
	const [team, setDropdown] = useState('')
	
	const inSave = (event) => {
		event.preventDefault()
		props.onSendCollaborator({
			name,
			cargo,
			image,
			team
		})

		setName('')
		setCargo('')
		setImage('')
		setDropdown('')
	}
	return (
		<section className='form-style'>
			<form onSubmit={inSave}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<TextField 
					required={true} 
					label='Nome' 
					placeholder='Digite seu Nome'
					value={name}
					onInput={(value) => setName(value)}/>
				<TextField
					required={true} 
					label='Cargo' 
					placeholder='Digite seu Cargo'
					value={cargo}
					onInput={(value) => setCargo(value)}/>
				<TextField
					required={true} 
					label='Imagem' 
					placeholder='Informe o endereço da imagem'
					value={image}
					onInput={(value) => setImage(value)}/>
				<Dropdown 
					required={true} 
					label='Time' 
					itens={props.teams}
					value= {team}
					onInput={(value) => setDropdown(value)}/>
				<Button>Criar Card</Button>
			</form>
		</section>
	)
}

export default Form