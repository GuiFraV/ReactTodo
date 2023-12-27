import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }){
    return(
        <ul className="list">
            {todos.length === 0 && <h1>Pas de todos today !</h1>}
            {todos.map((todo) => {
                return (
                    <TodoItem 
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                );
            })}
        </ul>
    )
}