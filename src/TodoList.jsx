import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.length === 0 && (
        <div className="flex items-center justify-center italic text-2xl mt-20">
          No Todos
        </div>
      )}
      {/* <div className="flex items-center justify-center italic text-2xl mt-20"></div> */}
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
