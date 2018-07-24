import {
    INIT,
} from './actionsTypes';
import { getProduct, } from './api';
import { fetchProductById, } from '../../controllers/product-controller';

function init(product) {
    return {
        type: INIT,
        product: product,
    }
}

//API ACTIONS
export function fetchProduct(id) {
    return dispatch => {
        return getProduct(id).then(res => dispatch(init(res)));
    }
}

export function fetchServerProduct(path) {
    let productId = path.split('/').pop();

    return dispatch => {
        return fetchProductById(productId).then( res => dispatch( init(res) ) );
    }
}





