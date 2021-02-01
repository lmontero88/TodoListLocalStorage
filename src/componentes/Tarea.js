import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons'


function Tarea({tarea,toggleDone,ResultEditToDo,deleteToDo}) {
    const [editar, setEditar] = useState(false)
    const [newToDo, SetNewToDo]= useState(tarea.tarea)


    const handleOnSubmit=(e)=>{
        e.preventDefault()
        ResultEditToDo(tarea.id, newToDo)
        setEditar(false)
    }
    return (
        <li className = 'lista-tareas__tarea'>
            <FontAwesomeIcon icon ={ tarea.done ? faCheckSquare : faSquare } className = 'lista-tareas__icono lista-tareas__icono-check' onClick= {()=>{toggleDone(tarea.id)}}/>
            <div className= 'lista-tareas__texto'>
                { editar 
                ?
                <form action='' className='formulario-editar-tarea' onSubmit={handleOnSubmit}>
                    <input type='text'className= 'formulario-editar-tarea__input' value={newToDo} onChange= {(e)=> SetNewToDo(e.target.value)}/>
                    <button type ='submit' className ='formulario-editar-tarea__btn'>Actualizar</button>
                </form>
                :
                tarea.tarea

                }
            
            </div>
            <div className = 'lista_tareas__contenedor-botones'>
            <FontAwesomeIcon icon ={faEdit } className = 'lista-tareas__icono lista-tareas__icono-accion' onClick ={()=>setEditar(!editar)}/>
            <FontAwesomeIcon icon ={faTimes } className = 'lista-tareas__icono lista-tareas__icono-accion'onClick ={()=>deleteToDo(tarea.id)}/>
            </div>
        </li>
    )
}

export default Tarea
