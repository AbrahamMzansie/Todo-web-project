export interface ITodo {
    id: number,
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
    onDeleteTodoHandler: (id: number) => void,
    onEditTodoHandler: (id: number, newTitle: string) => void,
    completedTodoHandler: (id: number, isCompleted: boolean) => void
}
