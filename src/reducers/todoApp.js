import { todosReducer } from './todos';
import { visibilityFilterReducer } from './visibilityFilter';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    visibilityFilter: visibilityFilterReducer,
    todos: todosReducer
});

export default todoApp;