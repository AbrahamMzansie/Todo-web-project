export interface ITodo {
    id: string,
    completed: boolean,
    title: string
};

export interface ProviderProps {
    children: React.ReactNode
};

export interface TodoContextObj {
    todoList: ITodo[],
    todoTitle: string,
    showCreateEditForm :boolean,
    setShowCreateEditForm :(value: React.SetStateAction<boolean>) => void,
    setTodoTitle: (value: React.SetStateAction<string>) => void,
    updateToDoHandler :(title: string) => void,
    createNewTodo: (todo: string) => void,
    onDeleteTodoHandler: (id: string) => void,
    onEditTodoHandler: (id: string, newTitle: string) => void,
    completedTodoHandler: (id: string, isCompleted: boolean) => void
}
