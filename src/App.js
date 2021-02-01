import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

function App() {
  const toDoSave = localStorage.getItem('tareas')? JSON.parse(localStorage.getItem('tareas')): [];
  const [tareas, setTareas] = useState(toDoSave);
  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas))
  },[tareas])
  let completeToDo = '';
  if (localStorage.getItem('showComplete')===null){
    completeToDo = true;
  }
  else{
    completeToDo = localStorage.getItem('showComplete')===true;
  }

  const [showComplete, setShowComplete] = useState(completeToDo);
  useEffect(()=>{
    localStorage.setItem('showComplete', showComplete.toString())
  },[showComplete])
  
  return (
    <div className ='contenedor'>
      <Header showComplete={showComplete} setShowComplete={setShowComplete}/>
      <FormularioTareas tareas = {tareas} setTareas = {setTareas}/>
      <ListaTareas tareas = {tareas} setTareas = {setTareas} showComplete={showComplete}/>
    </div>
  );
}


export default App;
