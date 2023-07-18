import React, {  FC, useState} from 'react';
import './TodoForm.css';
import UserTodosContext from '../../hooks/todo-context';

const TodoForm: FC = () => {

  const [todoTitle, setTodoTitle] = useState<string>("");
  const { createNewTodo , todoList} = UserTodosContext(); 

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
        <label>New Todo Name</label>
        <input value = {todoTitle} type="text" onChange={onInputChangeHandler} />
      </div>
      <button className='button' type="submit">Add Todo</button>      
    </form>
  );
}

export default TodoForm;
