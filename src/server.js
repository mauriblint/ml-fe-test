import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Helmet from "react-helmet";
import routes from "./routes";
import createStore from "./store";
import apiRoutes from './api-routes';

// Components
import {Layout} from "./components";


const app = express();
app.use(express.static(path.resolve(__dirname, "../dist") ) );
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/api', apiRoutes);

app.get( "/*", ( req, res ) => {
    const context = { };
    const store = createStore();

    const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) ) // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.serverFetch ) // check if components have data requirement
            .map( comp => store.dispatch( comp.serverFetch(req.url) ) ); // dispatch data requirement

    Promise.all( dataRequirements ).then( ( ) => {
        const jsx = (
            <ReduxProvider store={ store }>
                <StaticRouter context={ context } location={ req.url }>
                    <Layout />
                </StaticRouter>
            </ReduxProvider>
        );
        const reactDom = renderToString(jsx);
        const reduxState = store.getState();
        const helmetData = Helmet.renderStatic();

        res.writeHead( 200, { "Content-Type": "text/html" } );
        res.end( htmlTemplate( reactDom, reduxState, helmetData ) );
    } );
} );

app.listen( 2048 );

function htmlTemplate( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>Mercado Libre</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" crossorigin="anonymous">
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script src="/app.bundle.js"></script>
        </body>
        </html>
    `;
}