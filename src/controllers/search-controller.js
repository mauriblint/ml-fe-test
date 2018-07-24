import axios from "axios/index";

// TODO: Move to constants file
const apiBaseURL = 'https://api.mercadolibre.com/sites/MLA';
const apiSearchResultsCount = 4;

const searchProducts = (query) => {
    `${apiBaseURL}/search?q=${query}&limit=${apiSearchResultsCount}`
    return axios.get(`${apiBaseURL}/search?q=${query}&limit=${apiSearchResultsCount}`)
        .then(response => _transformSearchResponse(response.data));
};


function _transformSearchResponse (data) {
    const output = {};

    output.items = _transformItems(data.results);
    output.categories = _transformCategories(data.filters);
    output.author = { name: 'Mauricio', lastname: 'Blint' };


    return output;
}

function _transformCategories (filters) {

    let categories = [];

    // NOTE: use dotProp
    if (filters && filters.length && filters[0] && filters[0].values && filters[0].values.path_from_root) {
        categories = filters[0].values[0].path_from_root.map((category) => {
            return category.name;
        });
    }

    return categories;
}

function _transformItems (items) {
    return items.map((item) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                amount: item.price,
                currency: item.currency_id,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name
        };
    });
}


export {
    searchProducts,
}


