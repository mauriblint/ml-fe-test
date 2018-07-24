import React from "react";
import { connect } from "react-redux";
import {fetchProduct, fetchServerProduct} from "./actions";
import {ProductDetails} from "./index";
import Helmet from "react-helmet";

class ProductPage extends React.Component {

    componentDidMount() {

        let {match} = this.props;

        if ( match.params.id) {
            this.props.fetchProduct(match.params.id);
        }
    }

    render() {
        let {product} = this.props;

        return (product && product.id) ?
            <div className="product-page container">
                <Helmet>
                    <title>{`${product.title} - $ ${product.price.amount} en Mercado Libre`}</title>
                    <meta name="description" content={`Compralo en Mercado Libre a $ ${product.price.amount} - Comprá en 12 cuotas - Envío gratis.`} />
                </Helmet>
                <ProductDetails product={product} />
            </div> : null;
    }
}

ProductPage.serverFetch = fetchServerProduct;

ProductPage.defaultProps = {
    product: null,
};

const mapStateToProps = ( state ) => ( {
    product: state.product.data,
});

const mapDispatchToProps = {
    fetchProduct,
};

export default connect( mapStateToProps, mapDispatchToProps )(ProductPage);
