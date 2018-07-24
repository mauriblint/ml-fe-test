import {HomePage} from "./containers/homepage";
import {SearchResultsPage} from "./containers/search";
import {ProductPage} from "./containers/product";

export default [
    {
        path: "/",
        component: HomePage,
        exact: true,
    },
    {
        path: "/search/:q",
        component: SearchResultsPage,
        exact: true,
    },
    {
        path: "/product/:id",
        component: ProductPage,
        exact: true,
    },
];
