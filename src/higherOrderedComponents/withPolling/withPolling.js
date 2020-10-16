import React, {Component} from "react";
import {connect} from "react-redux";

export const withPolling = (pollingAction, duration = 30000) => Component => {

    const Wrapper = () => (
        class extends React.Component {

            componentDidMount() {
                this.props.pollingAction();
                this.dataPolling = setInterval(() => {
                    this.props.pollingAction();
                }, duration);
            }

            componentWillUnmount() {
                clearInterval(this.dataPolling);
            }

            render() {
                return <Component {...this.props}/>;
            }
        });

    const mapDispatchToProps = dispatch => {
        return {
            pollingAction: () => dispatch(pollingAction),
        }
    };

    return connect(null, mapDispatchToProps)(Wrapper())
};