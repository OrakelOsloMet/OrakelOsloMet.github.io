import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import * as actions from "./store/actions/actionIndex";
import Layout from "./higherOrderedComponents/Layout/Layout";
import Queue from "./containers/Queue/Queue";
import {INDEX_ROUTE} from "./constants/constants";

class App extends Component {

     componentDidMount() {
        this.props.autoSignIn();
    }

    render() {
        
        let routes = (
            <Switch>
                <Route path={INDEX_ROUTE} exact render={() => (<Queue/>)}/>
                <Redirect to={INDEX_ROUTE}/>
            </Switch>
        );

        return (
            <div className="App">
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        autoSignIn: () => dispatch(actions.checkValidAuth()),
    };
};

export default withRouter(connect(null, mapDispatchToProps)(App));


