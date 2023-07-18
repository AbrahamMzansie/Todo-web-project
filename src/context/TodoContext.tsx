import { createContext, useState } from "react";
import { ITodo, ProviderProps, TodoContextObj } from "../types/ITodo";

const TodoContext = createContext<TodoContextObj>(
    {
        todoList: [],
        retriveAllTodoList: () => { },
        createNewTodo: (todo: string) => { },
        onDeleteTodoHandler: (id: number) => { },
        onEditTodoHandler: (id: number, newTitle: string) => { }
    }
);

const Provider = ({ children }: ProviderProps) => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const retriveAllTodoList = () => {

        //setTodoList()
    }

    const createNewTodo = (todo: string) => {
        const todoObj: ITodo = {
            id: 1,
            completed: false,
            title: todo,
        }
        setTodoList(prevTodo => {
            return prevTodo.concat(todoObj)
        });

    }

    const onDeleteTodoHandler = (id: number) => {
        // const updatedTodos = todoList.filter(item => {
        //     return item.id !== id;
        // });
        // setTodoList(updatedTodos);
    }
    const onEditTodoHandler = (id: number, newTitle: string) => {
        // const updatedTodos = todoList.map((todo) => {
        //     if (todo.id === id) {
        //         return { ...todo, ...response.data };
        //     }
        //     return todo;
        // });
        // setTodoList(updatedTodos);
    }

    const mapDataToProps: TodoContextObj = {
        todoList,
        retriveAllTodoList,
        createNewTodo,
        onDeleteTodoHandler,
        onEditTodoHandler
    }

    return (
        <TodoContext.Provider value={mapDataToProps}>
            {children}
        </TodoContext.Provider>
    )
}

export { Provider };
export default TodoContext;