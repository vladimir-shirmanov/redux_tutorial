import { 
    VisibilityFilters,
    SET_VISIBILITY_FILTER, 
} from '../actionCreators';

const { SHOW_ALL } = VisibilityFilters;

export const visibilityFilterReducer = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};