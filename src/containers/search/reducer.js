import {
    INIT,
} from './actionsTypes';

const initialState = {
    results: [],
};

export default ( state = initialState, action ) => {
    const {type} = action;

    if (type === INIT) {

        return Object.assign(
            {},
            state,
            {
                results: action.data,
            }
        )
    }

    return state;
};