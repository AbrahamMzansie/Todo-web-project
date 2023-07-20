import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem';
import UserTodosContext from '../../hooks/todo-context';
import { BiSolidTrash , BiPencil } from 'react-icons/bi';
import "./TodoList.css";


const TodoList:React.FC = () => {

    const { todoList, completedTodoHandler,
        onEditTodoHandler, onDeleteTodoHandler   } = UserTodosContext();
    const [completed, setCompleted] = useState<boolean>(false);

    const todoCompletedHandler = (id: string, event: { target: { checked: string | boolean | ((prevState: string | boolean | undefined) => string | boolean | undefined) | undefined; }; }) => {
        setCompleted(Boolean(event.target.checked));
        completedTodoHandler(id, Boolean(event.target.checked));
    }

    const editTodoHandler = (id: string, title: string) => {      
        onEditTodoHandler(id , title);       
    }
    const deleteTodoHandler = (id: string) => {
        onDeleteTodoHandler(id);       
        
    }
    return (
        <ul className="doto-list">
            {todoList.map(todo => (
                <TodoItem
                    key={todo.id}
                >
                    <input className='completed-checkbox'
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(event) => todoCompletedHandler(todo.id, event)} />
                    <div className="todoTitle">
                        <p className={`${todo.completed && "mark-as-completed"}`}>{todo.title}</p>
                    </div>
                    <div className="todo-icon" >
                        <BiPencil onClick={(e) => editTodoHandler(todo.id , todo.title)} className='pencil-icon' />
                        <BiSolidTrash className='delete-icon' onClick={() => deleteTodoHandler(todo.id)} />
                    </div>                 
                </TodoItem>
            ))}
        </ul>
    )
}

export default TodoList