import Card from '../Card'
import './Team.css'

const Team = ({name, primary, secondary, collaborators}) => {
	const css = { backgroundColor: secondary }
	return (
		(collaborators.length > 0) && <section className="team" style={css}> 
			<h3 style={{borderColor: primary}}>{name}</h3>
			<div className='collaborator'>
				{collaborators.map(collaborator => <Card 
					key={collaborator.name} 
					name={collaborator.name}
					cargo={collaborator.cargo} 
					image={collaborator.image} 
					color={primary}					
				/>)}
			</div>
		</section>
	)
}

export default Team