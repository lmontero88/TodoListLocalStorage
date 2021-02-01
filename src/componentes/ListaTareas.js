import React from 'react'
import Tarea from './Tarea'

function ListaTareas({tareas,setTareas,showComplete}) {

    const toggleDone = (id)=>{
        setTareas(tareas.map((tarea)=>{
            if(tarea.id === id){
                return {...tarea, done : !tarea.done}
            }
            return tarea
            }))
    }

    const ResultEditToDo = (id, newtarea)=>{
        setTareas(tareas.map((tarea)=>{
            if(tarea.id===id){
                return {...tarea, tarea : newtarea}
            }
            return tarea
        }))

    }

    const deleteToDo = (id)=>{
        setTareas(tareas.filter((tarea)=>{
            if(tarea.id!==id){
                return tarea
            }
            return
        }))

    }
    return (
        <ul className='lista-tareas'>
            {   tareas.length > 0 
                ?
                tareas.map((tarea,index)=>{
                    if(showComplete){
                        return <Tarea key={index} tarea ={tarea} toggleDone = {toggleDone} ResultEditToDo ={ResultEditToDo} deleteToDo = {deleteToDo}/>
                    }
                    else if (!tarea.done){
                        return <Tarea key={index} tarea ={tarea} toggleDone = {toggleDone} ResultEditToDo ={ResultEditToDo} deleteToDo = {deleteToDo}/>
                    }

                    return
                    
                })
                : <div className = 'lista-tareas__mensaje'>No hay tareas pendinetes</div>
                
            }
           
        </ul>
    )
}

export default ListaTareas
