import {Action, todo, ActionTypes} from '../actions';

export const todosReducer = (state: todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter(({id}: todo) => id !== action.payload);
        default: 
            return state;
    }
}