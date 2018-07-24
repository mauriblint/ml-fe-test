import React from "react";
import Helmet from "react-helmet";

const Homepage = (props) => {
    return (
        <Helmet>
            <title>Mercado Libre</title>
            <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
        </Helmet>
    );
}

export default Homepage;
