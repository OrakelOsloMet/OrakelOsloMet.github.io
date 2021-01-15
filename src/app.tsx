import React, {useEffect} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkValidAuth, fetchSubjects} from "./store/actions/actionIndex";

import Layout from "./higherOrderedComponents/Layout/layout";
import QueueConnected from "./containers/Queue/queueConnected";
import {INDEX_ROUTE} from "./constants/constants";
import {bindActionCreators, Dispatch} from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        autoLogin: checkValidAuth,
        getSubjectData: fetchSubjects
    }, dispatch);
};

type Props = ReturnType<typeof mapDispatchToProps>;

const App: React.FC<Props> = (props: Props) => {
    const {autoLogin, getSubjectData} = props;

    useEffect(() => {
        autoLogin();
        getSubjectData();
    },[]);

    let routes = (
        <Switch>
            <Route path={INDEX_ROUTE} exact render={() => (<QueueConnected/>)}/>
            <Redirect to={INDEX_ROUTE}/>
        </Switch>
    );

    return (
        <div style={{textAlign: "center"}}>
            <Layout>
                {routes}
            </Layout>
        </div>
    );
};

export default withRouter(connect(null, mapDispatchToProps)(App));


