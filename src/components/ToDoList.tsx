type Todo = {
    id: number;
    text: string;
}
type State = {
    todos: Todo[];
}

type Action = 
| { type: "ADD_TODO"; paylod: string }
| { type: "REMOVE_TODO"; paylod: number }

const initialState: State = { 
    todos: []
}

const todoReducer = (action: Action) => {
    switch(Action.type)
}