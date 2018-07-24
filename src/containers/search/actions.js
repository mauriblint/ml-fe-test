import {
    INIT,
} from './actionsTypes';
import { getSearchResults, } from './api';
import { searchProducts, } from '../../controllers/search-controller';

function init(data) {
    return {
        type: INIT,
        data: data,
    }
}

//API ACTIONS
export function fetchResults(q="") {
    return dispatch => {
        return getSearchResults(q).then(res => dispatch(init(res.items)));
    }
}

export function fetchServerResults(path) {
    let param = path.split('/').pop();

    return dispatch => {
        return searchProducts(param).then( res => dispatch( init(res.items) ) );
    }
}





