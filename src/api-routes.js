import express from "express";
import {searchProducts} from './controllers/search-controller';
import {fetchProductById} from './controllers/product-controller';

const router = express.Router();


router.get('/items', (req, res) => {
    const q = req.query.search;

    if (!!q) {
        searchProducts(q)
            .then(response => res.json(response))
    } else {
        res.status(400).send({
            error: 'Param \'search\' not found on the query URL.' });
    }
});


router.get('/items/:id', (req, res) => {
    const productId = req.params.id;

    if (!!productId) {
        fetchProductById(productId)
            .then(response => res.json(response));
    } else {
        res.status(400).send({ error: 'Please add a Product ID.' });
    }
});

export default router;