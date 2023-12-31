import React, { FC, useState } from 'react';
import './TodoForm.css';
import UserTodosContext from '../../hooks/todo-context';


const TodoForm: FC = () => {

  const { createNewTodo} = UserTodosContext();
  const [todoTitle, setTodoTitle  ] = useState<string>("");
  const formSubmitHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    createNewTodo(todoTitle);
    setTodoTitle("");
  }
  
  const onInputChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTodoTitle(event.target.value);
  }  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Enter To do Name</label>
        <input value={todoTitle} type="text" onChange={onInputChangeHandler} />
      </div>
      <button disabled={todoTitle === "" ? true : false} className={`button ${todoTitle === "" && "disable-button"}`} type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
