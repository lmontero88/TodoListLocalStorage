import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash , faEye} from '@fortawesome/free-solid-svg-icons'

function Header({setShowComplete, showComplete}) {
const toogleShow = ()=>{
    setShowComplete(!showComplete)
}

    return (
        <header className = 'header'>
            <h1 className ='header__titulo'> Lista de tareas</h1>
            {
            showComplete 
            ?
            <button className ='header__boton' onClick ={toogleShow}>
               <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton'/> 
            </button>
            :
            <button className ='header__boton' onClick ={toogleShow}>
               <FontAwesomeIcon icon={faEye} className='header__icono-boton'/> 
            </button>
        }
            
        </header>
    )
}

export default Header
