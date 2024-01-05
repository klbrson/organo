import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className='dropdown-style'>
            <label>{props.label}</label>
            <select 
                value= {props.value}
                required={props.required}
                onChange={event=> {props.onInput(event.target.value) }}
            >
                <option value=""></option>
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;