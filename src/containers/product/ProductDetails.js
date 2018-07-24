import React from 'react';
import _ from 'lodash';


const ProductDetails = (props) => {

    return (
    <div className="product-details">
        <div className="row">
            <div className="col">
                <div className="product-details__gallery">
                    <img src={props.product.picture} alt='Product' />
                </div>

                <div className="product-details__description">
                    <div className="product-details__description-title">
                        Descripción del producto
                    </div>
                    <p className="product-details__description-text">
                        {props.product.description}
                    </p>
                </div>
            </div>
            <div className="col-4">
                <div className="product-details__sidebar">
                    <div className="product-details__sidebar-info">
                        {props.product.condition}{props.product.sold_quantity !== 0
                        ? ` - ${props.product.sold_quantity} vendidos`
                        : ''}
                    </div>

                    <h4 className="product-details__sidebar-title">
                        {props.product.title}
                    </h4>

                    <div className="product-details__sidebar-price">
                        $ {props.product.price.amount.toLocaleString()}
                    </div>

                    <a href={props.product.permalink}>
                        <button className="btn btn-primary btn-block product-details__sidebar-purchase-btn">
                            Comprar
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProductDetails;
