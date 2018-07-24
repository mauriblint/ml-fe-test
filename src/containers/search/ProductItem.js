import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    let {product} = props;

    return (
        <div className="product-item">
            <div className="product-item__image">
                <Link to={`/product/${props.product.id}`}>
                    <span className="product-item__image-view" style={{backgroundImage: `url(${product.picture})`}} />
                </Link>
            </div>
            <div className="product-item__body">
                <div className="product-item__body-price">
                    <Link to={`/product/${props.product.id}`}>
                        ${props.product.price.amount.toLocaleString()}
                    </Link>
                    { props.product.free_shipping &&
                    <img className='item-shipping' src="/img/free_shipping.png" alt='shipping' />
                    }
                </div>

                <div className="product-item__body-title">
                        {props.product.title}
                </div>
            </div>

            <div className="product-item__location">
                {props.product.address}
            </div>
        </div>
    );
};

export default ProductItem;
