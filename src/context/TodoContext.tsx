import { createContext, useState } from "react";
import { ITodo, ProviderProps, TodoContextObj } from "../types/ITodo";

const TodoContext = createContext<TodoContextObj>(
    {
        todoList: [],
        retriveAllTodoList: () => { },
        createNewTodo: (todo: string) => { },
        onDeleteTodoHandler: (id: number) => { },
        onEditTodoHandler: (id: number, newTitle: string) => { },
        completedTodoHandler: (id: number, isCompleted: boolean) => { }
    }
);

const Provider = ({ children }: ProviderProps) => {

    const storedItems= localStorage.getItem("todos");
    const parsedData :ITodo[] = storedItems ? JSON.parse(storedItems) : [];
    const [todoList, setTodoList] = useState<ITodo[]>(parsedData);

    const retriveAllTodoList = () => {

        //setTodoList()
    }

    const createNewTodo = (todo: string) => {
        const todoObj: ITodo = {
            id: Math.random(),
            completed: false,
            title: todo,
        }       
       
        setTodoList(prevTodo => {
            return prevTodo.concat(todoObj)
        });

    }

    const onDeleteTodoHandler = (id: number) => {
        const updatedTodos = todoList.filter(item => {
            return item.id !== id;
        });
        setTodoList(updatedTodos);
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

    const completedTodoHandler = (id: number, isCompleted: boolean) => {
        const updatedTodos = todoList.map((todo) => {
            if (todo.id === id) {
                const newTodo: ITodo = {
                    ...todo,
                    completed: isCompleted
                }

                return { ...todo, ...newTodo };
            }
            return todo;
        });

        setTodoList(updatedTodos);     
    }

    const mapDataToProps: TodoContextObj = {
        todoList,
        retriveAllTodoList,
        createNewTodo,
        onDeleteTodoHandler,
        onEditTodoHandler,
        completedTodoHandler
    }

    return (
        <TodoContext.Provider value={mapDataToProps}>
            {children}
        </TodoContext.Provider>
    )
}

export { Provider };
export default TodoContext;