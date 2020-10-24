import React from "react";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";

import * as actions from "../../../store/actions/actionIndex";

const queueTable = (props) => {

    /* ----- Create Table Head ----- */

    let columns = [];
    const defaultColumns =
        <>
            <th key={"queueNumberHeader"} scope="col">Plassering</th>
            <th key={"nameHeader"} scope="col">Navn</th>
            <th key={"subjectHeader"} scope="col">Emne</th>
            <th key={"discordHeader"} scope="col">Arena</th>
        </>;

    //The actions column is only visible to logged in users
    let loggedInColumns = props.isAuthenticated ? <th key={"actionsHeader"} scope="col">Handlinger</th> : null;

    columns.push(defaultColumns);
    columns.push(loggedInColumns);

    const tableHead =
        <thead key={"tableHead"} className="thead-dark">
        <tr>
            {columns}
        </tr>
        </thead>;

    /* ----- Create Table Body ----- */

    let rows = [];
    for (let i = 0; i < props.queueData.length; i++) {
        let rowId = "row" + i;

        let cells = [];
        cells.push(<td key={"entry" + i} id={"entry" + i}>{i + 1}</td>);
        cells.push(<td key={"name" + i} id={"name" + i}>{props.queueData[i].name}</td>);
        cells.push(<td key={"subject" + i} id={"subject" + i}>{props.queueData[i].subject}</td>);
        cells.push(<td key={"discord" + i} id={"discord" + i}>{props.queueData[i].digitalConsultation === false ? "Datatorget" : "Discord"}</td>);

        let actionButtons =
            <>
                <button className="btn btn-success" onClick={() => props.confirmDoneEntity(props.queueData[i].id)}>Ferdig</button>
                <button className="btn btn-danger ml-2" onClick={() => props.deleteQueueEntity(props.queueData[i].id)}>Slett</button>
            </>;

        if (props.isAuthenticated) {
            actionButtons = props.userRoles.includes("ROLE_ADMIN") ? actionButtons : null;
            cells.push(<td key={"actions" + i} id={"action" + i}>{actionButtons}</td>);
        }

        rows.push(<tr key={i} id={rowId}>{cells}</tr>);
    }

    const tableBody = <tbody>{rows}</tbody>;

    return (
        <Table striped bordered hover responsive className="mb-4">{tableHead}{tableBody}</Table>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token != null,
        userRoles: state.auth.userRoles,
        queueData: state.queue.queueData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteQueueEntity: (id) => dispatch(actions.deleteFromQueue(id)),
        confirmDoneEntity: (id) => dispatch(actions.doneInQueue(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(queueTable);