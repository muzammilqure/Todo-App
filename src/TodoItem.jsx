import React from "react";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li
      className=" flex items-center border border-solid border-slate-200 w-auto mx-5 my-2 p-2 rounded-md"
      // key={id}
    >
      <label
        className="cursor-pointer mx-5 p-2 hover:bg-slate-200 active:text-slate-800 rounded-md text-2xl"
        onChange={(e) => toggleTodo(id, e.target.checked)}
      >
        <input
          type="checkbox"
          checked={completed}
          className="m-2 cursor-pointer border-none outline-none"
        />
        {title}
      </label>
      <button
        className="border border-red-600 text-red-600 p-1 rounded-md hover:scale-95 transition-all active:scale-90 hover:bg-red-600 hover:text-white"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
