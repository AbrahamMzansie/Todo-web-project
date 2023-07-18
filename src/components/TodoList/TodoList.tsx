import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem';
import UserTodosContext from '../../hooks/todo-context';

// import { GoPencil}  from "react-icons/fa";
import { BiPencil, BiSolidTrash } from 'react-icons/bi';

import "./TodoList.css";

const TodoList = () => {

    const { todoList, completedTodoHandler,
        onEditTodoHandler, onDeleteTodoHandler } = UserTodosContext();
    const [completed, setCompleted] = useState<boolean>(false);

    const todoCompletedHandler = (id: number, event: { target: { checked: string | boolean | ((prevState: string | boolean | undefined) => string | boolean | undefined) | undefined; }; }) => {
        setCompleted(Boolean(event.target.checked));        
        completedTodoHandler(id, Boolean(event.target.checked));
    }

    const editTodoHandler = (id: number, title: string) => {
        onEditTodoHandler(id, title)
    }
    const deleteTodoHandler = (id: number) => {
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
                        <p className={`${todo.completed && "mark-as-completed"}`}>{todo.title}  </p> </div>
                    <div className="todo-icon" >
                        {/* <BiPencil onClick={() => editTodoHandler(todo.id)} className='pencil-icon' /> */}
                        <BiSolidTrash onClick={() => deleteTodoHandler(todo.id)} />
                    </div>
                </TodoItem>
            ))}
        </ul>
    )
}

export default TodoList