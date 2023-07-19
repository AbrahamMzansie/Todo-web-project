import React from 'react';
import "./TodoItem.css";


type Props = {
  children: React.ReactNode
};
const TodoItem = ({ children }: Props) => {

  return (
    <li className="todo-item" >
      {children}     
    </li>
  );
}

export default TodoItem;
