import './Card.css'

const Card = ({name, cargo, image, color}) => {

    return (
        <div className='card'> 
            <div className='header' style={{backgroundColor: color}}>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
export default Card
