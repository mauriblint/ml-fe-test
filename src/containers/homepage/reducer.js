import {
    INIT,
} from './actionsTypes';

const initialState = {
    data: [],
};

export default ( state = initialState, action ) => {
    const {type} = action;

    if (type === INIT) {
        return Object.assign(
            {},
            state,
            {
                data: action.data,
            }
        )
    }

    return state;
};