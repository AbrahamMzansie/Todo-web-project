import { createContext, useState } from "react";
import { ITodo, ProviderProps, TodoContextObj } from "../types/ITodo";

const TodoContext = createContext<TodoContextObj>(
    {
        todoList: [],  
        todoTitle : "",   
        showCreateEditForm :true,
        setShowCreateEditForm : (value: React.SetStateAction<boolean>) => {},         
        createNewTodo: (todo: string) => { },
        updateToDoHandler: (title: string) => { },
        setTodoTitle :(value: React.SetStateAction<string>) => {},
        onDeleteTodoHandler: (id: number) => { },
        onEditTodoHandler: (id: number, newTitle: string) => { },
        completedTodoHandler: (id: number, isCompleted: boolean) => { }
    }
);

const Provider = ({ children }: ProviderProps) => {

    const storedItems= localStorage.getItem("todos");
    const parsedData :ITodo[] = storedItems ? JSON.parse(storedItems) : [];
    const [todoList, setTodoList] = useState<ITodo[]>(parsedData); 
    const [todoTitle, setTodoTitle] = useState<string>(""); 
    const [todoId, setTodoId] = useState<number>(); 
    const [showCreateEditForm , setShowCreateEditForm] = useState<boolean>(true);
    
    
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
        setShowCreateEditForm(true);
    }
    const updateToDoHandler = (newTitle: string) => { 
        const updatedTodos = todoList.map((todo) => {
            if (todo.id === todoId) {
                const Todo: ITodo = {
                    ...todo,
                    title: newTitle
                }

                return { ...todo, ...Todo };
            }
            return todo;
        });
        setTodoList(updatedTodos);         
       
    }
    const onEditTodoHandler = (id: number, newTitle: string) => {
        setTodoTitle(newTitle); 
        setTodoId(id); 
        setShowCreateEditForm(false);
       
    }

    const completedTodoHandler = (id: number, isCompleted: boolean) => {
        const updatedTodos = todoList.map((todo) => {
            if (todo.id === id) {
                const completedTodo: ITodo = {
                    ...todo,
                    completed: isCompleted
                }

                return { ...todo, ...completedTodo };
            }
            return todo;
        });
        setTodoList(updatedTodos);     
    }

    const contextData: TodoContextObj = {
        todoList,   
        todoTitle,
        setTodoTitle,  
        showCreateEditForm,
        setShowCreateEditForm,
        createNewTodo,
        updateToDoHandler,
        onDeleteTodoHandler,
        onEditTodoHandler,
        completedTodoHandler
    }

    return (
        <TodoContext.Provider value={contextData}>
            {children}
        </TodoContext.Provider>
    )
}

export { Provider };
export default TodoContext;