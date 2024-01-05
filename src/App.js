import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
	const [collaborators, setCollaborators] = useState([])

	const onSaveCollaborator = (elem) => {
		debugger
		setCollaborators([...collaborators, elem])
	}

	const teams = [
		{
			name: 'Front-End',
			primary: '#82CFFA',
			secondary: '#E8F8FF',
		},
		{
			name: 'Data Sciense',
			primary: '#A6D157',
			secondary: '#F0F8E2',
		},
		{
			name: 'Devops',
			primary: '#E06B69',
			secondary: '#FDE7E8',
		},
		{
			name: 'UX e Design',
			primary: '#D86EBF',
			secondary: '#FAE5F5',
		},
		{
			name: 'Mobile',
			primary: '#FEBA05',
			secondary: '#FFF5D9',
		},
		{
			name: 'Inovação e Gestão',
			primary: '#FF8A29',
			secondary: '#FFEEDF',
		}
		
	]

	return (
		<div className="App">
			<Banner />
			<Form 
				teams={teams.map(elem => elem.name)} 
				onSendCollaborator={collaborator => onSaveCollaborator(collaborator) }
			/>
			
			{teams.map(team => <Team 
				key={team.name} 
				name={team.name} 
				primary={team.primary} 
				secondary={team.secondary} 
				collaborators={collaborators.filter(elem => elem.team === team.name)}
			/>)}
		</div>
	);
}

export default App;
