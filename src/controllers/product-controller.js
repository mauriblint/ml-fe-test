import axios from "axios/index";

// TODO: Move to constants file
const apiBaseURL = 'https://api.mercadolibre.com';

const fetchProductById = (id) => {

    return axios.all([
        axios.get(`${apiBaseURL}/items/${id}`),
        axios.get(`${apiBaseURL}/items/${id}/description`)
    ])
    .then(axios.spread((product, description) => {
        return _transformProductResponse(product.data, description.data);
    }));
};

function _transformProductResponse (product, description) {
    const formattedProduct = {};

    formattedProduct.id = (product.id);
    formattedProduct.title = (product.title);
    formattedProduct.price = {
        amount: product.price,
        currency: product.currency_id,
    };

    if (product.pictures && product.pictures.length) {
        formattedProduct.picture = product.pictures[0].secure_url;
    }

    formattedProduct.condition = product.condition === 'new' ? 'Nuevo' : 'Usado';
    formattedProduct.free_shipping = product.shipping.free_shipping;
    formattedProduct.sold_quantity = product.sold_quantity;
    formattedProduct.description = description.plain_text;
    formattedProduct.permalink = product.permalink;

    return formattedProduct;
}


export {
    fetchProductById,
}


