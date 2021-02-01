import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';

function FormularioTareas({tareas, setTareas}) {
    const [valorTarea, setValorTarea] = useState('')
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        setTareas(
            [...tareas, {
                id: uuidv4(),
                tarea: valorTarea,
                done: false
            }]
            
        )
        setValorTarea('')
    }
    const handleOnChange = (e)=>{
        setValorTarea(e.target.value) 
    }

    return (
        <div>
           <form action='' className ='formulario-tareas' onSubmit = {handleOnSubmit}>
                <input type= 'text' 
                className='formulario-tareas__input'
                placeholder='Escribe la tarea'
                value = {valorTarea}
                onChange = {handleOnChange}
                />
                <button type='submit' 
                className='formulari-tareas__btn'> 
                <FontAwesomeIcon icon = {faPlusSquare } 
                className = 'formulario-tareas__icono-btn'
                />
                </button>
            </form> 
        </div>
    )
}

export default FormularioTareas
