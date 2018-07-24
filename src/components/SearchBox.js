import React, { Component } from "react";
import {fetchResults} from "../containers/search/actions";
import { connect } from "react-redux";

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
        this.submitHandler = this.submitHandler.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        const target = event.target;
        this.setState({
            search: target.value,
        });
    }

    submitHandler(event) {
        event.preventDefault();

        if (this.state.search) {
            this.props.navigation.push(`/search/${this.state.search}`);
            this.props.fetchResults(this.state.search);
        }
    }

    render() {
        return (
            <form className="mr-auto nav-search form-inline"
                   onSubmit={this.submitHandler}
                   onChange={this.handleInput}
            >
                <div className="input-group">
                    <input
                        value={this.state.search}
                        type="text"
                        className="form-control"
                        placeholder="Buscar productos, marcas y mas..."
                    />
                    <button className="input-group-addon search-button" type="submit">
                        <img src="/img/search-icon.png" />
                    </button>
                </div>
            </form>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    fetchResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);