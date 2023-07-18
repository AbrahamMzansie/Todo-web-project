import React, { FC } from 'react';
import "./TodoItem.css";
import { IconType } from 'react-icons/lib';

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
