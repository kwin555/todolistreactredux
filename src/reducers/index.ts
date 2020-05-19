import {combineReducers} from 'redux';
import {todosReducer} from './todos';
import { todo } from '../actions';

export interface StoreState {
    todos: todo[];
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});