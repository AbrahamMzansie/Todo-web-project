import React, { FC, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

import TodoForm from './components/TodoForm/TodoForm';
import UserTodosContext from './hooks/todo-context';

const App: FC = () => {

  const { todoList } = UserTodosContext();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));    
  }, [todoList]);
  return (
    <div>
      <section id="todo-form">
        <TodoForm />
      </section>
      <section id="todos">
        <TodoList />
      </section>
    </div>
  );
}

export default App;
