import React, { FC } from 'react';
import './App.css';

import TodoForm from './components/TodoForm/TodoForm';

const App: FC = () => {
  return (
    <div>
      <section id="todo-form">
        <TodoForm />
      </section>
      <section id="todos">

      </section>
    </div>
  );
}

export default App;
