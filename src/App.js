import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App(todo) {
  
  const[inputText, setInputText]= useState("");
  const[todos, setTodos]= useState([]);
  const[status, SetStatus]= useState("all");
  const[filteredTodos, setfilteredTodos]= useState([]);

  useEffect(() =>{
    getLocalTodos();
  }, []);

  useEffect(() =>{
    filterHandler();
  }, [todos]);

  const filterHandler=() => {
    switch(status){
      case 'completed' :
        setfilteredTodos(todos.filter(todo =>todo.completed=== true));
        break;

        case 'uncompleted':
          setfilteredTodos(todos.filter(todo =>todo.completed=== false));
        break;
        default:
          setfilteredTodos(todos);
          break;

    }
  }
  const saveLocalTodos=() =>{
    if(localStorage.getItem('todos') === null ){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };
  const getLocalTodos =() =>{

    if(localStorage.getItem('todos') === null ){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      localStorage.setItem('todos', JSON.stringify(todos));
    }

  }
  return (
    <div className="App">
    <header>
      <h1>My Todo List</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={SetStatus}/>
    <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
