import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Home from 'pages/home/home'
import Index from 'pages/index/index'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers/reducers';
const store = createStore(reducers); 

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/index">Index</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/index" component={Index} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
