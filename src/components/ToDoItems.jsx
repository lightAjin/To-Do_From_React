import React from 'react'
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png'
import './CSS/ToDoItems.css'

const ToDoItems = ({ no, display, text, setTodos }) => {
  
  const delete2 = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    localStorage.setItem("todos", JSON.stringify(data));
    setTodos(data);
  }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        data[i].display = data[i].display === "" ? "line-through" : "";   
        break;
      }
    }
    localStorage.setItem("todos", JSON.stringify(data));
    setTodos(data);
  }

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={() => { toggle(no) }}>
        {display === "" ? <img src={not_tick} alt="No"/> : <img src={tick} alt="No" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={() => { delete2(no) }} src={cross} alt="No"/>
    </div>
  )
}

export default ToDoItems;
