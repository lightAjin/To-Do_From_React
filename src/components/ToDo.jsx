import React, { useState, useRef, useEffect } from 'react';
import './CSS/ToDo.css';
import ToDoItems from './ToDoItems';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const countRef = useRef(1);

  const add = () => {
    const newTodo = {
      no: countRef.current,
      text: inputRef.current.value,
      display: "",
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    inputRef.current.value = "";
    countRef.current++;
    localStorage.setItem("todos_count", countRef.current);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const storedCount = parseInt(localStorage.getItem("todos_count"), 10);
    if (storedTodos) {
      setTodos(storedTodos);
    }
    if (storedCount) {
      countRef.current = storedCount;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add Your task' className="todo-input" />
        <div onClick={add} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map((item, index) => (
            <ToDoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
          ))
        ) : (
          <div>No tasks available</div>
        )}
      </div>
    </div>
  );
}

export default ToDo;
