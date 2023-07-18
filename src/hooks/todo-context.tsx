import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const UserTodosContext = () => {
    return useContext(TodoContext)
}

export default UserTodosContext;