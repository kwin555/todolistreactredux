import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';

export interface todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface fetchTodosAction {
    type: ActionTypes.fetchTodos
    payload: todo[]
}

export interface deleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<todo[]>(url)

        dispatch<fetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    };
};

export const deleteTodo = (id: number): deleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id,
    }
}