export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodoActionCreator = (text) => {
    return {
        type: ADD_TODO,
        text: text
    }
};

export const toggleTodoActionCreator = (index) => {
    return {
        type: TOGGLE_TODO,
        index: index
    }
};

export const setVisibilityFilterActionCreator = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    }
};