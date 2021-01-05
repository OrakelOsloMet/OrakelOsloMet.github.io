import React from "react";
import {Table} from "react-bootstrap";
import TableHead from "./TableHead/TableHead";
import {ConfirmButton, DeleteButton} from "../Buttons/Buttons";
import {QueueEntity} from "../../../models/QueueEntity";

import * as actions from "../../../store/actions/actionIndex";

type QueueTableProps = {
    queueData: QueueEntity[],
    confirmDoneEntity: Function,
    deleteQueueEntity: Function,
    isAuthenticated: boolean,
    userRoles: string[],
    defaultColumns: string[],
    loggedInColumns: string[]
}

const queueTable = (props: QueueTableProps) => {

    /* ----- Create Table Body ----- */

    let rows = [];
    for (let i = 0; i < props.queueData.length; i++) {
        let rowId = "row" + i;

        let cells = [];
        cells.push(<td key={"entry" + i} id={"entry" + i}># {i + 1}</td>);
        cells.push(<td key={"name" + i} id={"name" + i}>{props.queueData[i].name}</td>);
        cells.push(<td key={"subject" + i} id={"subject" + i}>{props.queueData[i].subject}</td>);
        cells.push(<td key={"discord" + i} id={"discord" + i}>{!props.queueData[i].digitalConsultation ? "Datatorget" : "Discord"}</td>);

        if (props.isAuthenticated && props.userRoles.includes("ROLE_ADMIN")) {
                cells.push(<td key={"actions" + i} id={"action" + i}>{
                    <>
                        <ConfirmButton onClick={() => props.confirmDoneEntity(props.queueData[i].id)}>Ferdig</ConfirmButton>
                        <DeleteButton className="ml-2" onClick={() => props.deleteQueueEntity(props.queueData[i].id)}>Slett</DeleteButton>
                    </>
                }</td>);
        }
        rows.push(<tr key={i} id={rowId}>{cells}</tr>);
    }

    const tableHead = <TableHead defaultColumns={props.defaultColumns} loggedInColumns={props.loggedInColumns} isAuthenticated={props.isAuthenticated}/>;
    const tableBody = <tbody>{rows}</tbody>;

    return (
        <Table striped bordered hover responsive className="mb-4">{tableHead}{tableBody}</Table>
    );
};

export default queueTable;