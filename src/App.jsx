import { useState, useEffect } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("todos")
    if(localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    // Update local storage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); 



  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((t) => {
        return id !== t.id;
      });
    });
  }

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
          ...currentTodos,
          {
          id: crypto.randomUUID(),
          title: title,
          completed: false
          }
      ];

    })
  }

  console.log(todos);

  return (
    <>
    <NewTodoForm onSubmit={addTodo} />

      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

    </>
  );
}