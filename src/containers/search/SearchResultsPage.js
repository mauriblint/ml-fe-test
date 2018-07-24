import React from "react";
import { connect } from "react-redux";
import {fetchResults, fetchServerResults} from "./actions";
import {ProductItem} from "./";

class SearchResultsPage extends React.Component {

    render() {
        let {results} = this.props;

        return (
            <div className="search-page container">
                <div className="search-page__results">
                    {(results && results.length) ? results.map(this.renderItem) : null}
                </div>
            </div>
        );
    }

    renderItem (product) {
        return <ProductItem key={product.id} product={product} />;
    }
}

SearchResultsPage.serverFetch = fetchServerResults;

const mapStateToProps = ( state ) => ( {
    results: state.search.results,
} );

const mapDispatchToProps = {
    fetchResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
