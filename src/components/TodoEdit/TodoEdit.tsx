import React from 'react'
import "./TodoEdit.css";
import UserTodosContext from '../../hooks/todo-context';


const TodoEdit = () => {

    const { todoTitle, setTodoTitle, setShowCreateEditForm, updateToDoHandler } = UserTodosContext();

    const formSubmitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        updateToDoHandler(todoTitle);        
    }
    const onInputChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTodoTitle(event.target.value);
    }

    const closeEditTodoForm = () => {
        setShowCreateEditForm(true);
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="edit-form-control">
                <label>Update To do</label>
                <input value={todoTitle} type="text" onChange={onInputChangeHandler} />
            </div>
            <button disabled={todoTitle === "" ? true : false} className='button edit-button' type="submit">Edit Todo</button>
            <button type="reset" onClick={closeEditTodoForm}  className='button cancel-button'>Cancel</button>
        </form>
    )
}

export default TodoEdit