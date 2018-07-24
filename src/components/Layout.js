import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import {Navbar} from "./index";
import routes from "../routes";


class Layout extends Component {

    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!",
        };
    }

    render() {
        return (
            <div>
                <Navbar navigation={this.props.history} />
                <div>
                    <Switch>
                        { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;
