import React from "react";
import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  };
  return (
    <>
      <h1 className="flex items-center justify-center m-1 text-2xl my-10 font-extrabold italic">
        TODO App
      </h1>
      <form
        className="flex flex-col items-center justify-center mx-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="outline-none w-full border border-solid border-slate-700 m-2 rounded-md p-2"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          // onKeyDown={(e)=> e.key==='Enter' && }
        />
        <button className="add bg-blue-400 text-white w-full rounded-md p-2 font-bold text-lg  hover:ring-4 active:ring-2 m-2">
          Add New Todo +
        </button>
      </form>
    </>
  );
};

export default NewTodoForm;
