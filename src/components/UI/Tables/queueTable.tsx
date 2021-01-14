import React from "react";
import {Table} from "react-bootstrap";
import TableHead from "./TableHead/tableHead";
import {ConfirmButton, DeleteButton} from "../Buttons/buttons";

import * as actions from "../../../store/actions/actionIndex";

type Props = {
    queueData: IQueueEntity[],
    confirmDoneEntity: Function,
    deleteQueueEntity: Function,
    isAuthenticated: boolean,
    userRoles: Array<string>,
    defaultColumns: Array<string>,
    loggedInColumns: Array<string>
}

const queueTable = (props: Props) => {

    /* ----- Create Table Body ----- */
    const {queueData, confirmDoneEntity, deleteQueueEntity, isAuthenticated, userRoles, defaultColumns, loggedInColumns} = props;
    let rows = [];

    for (let i = 0; i < queueData.length; i++) {
        let rowId = "row" + i;

        let cells = [];
        cells.push(<td key={"entry" + i} id={"entry" + i}># {i + 1}</td>);
        cells.push(<td key={"name" + i} id={"name" + i}>{queueData[i].name}</td>);
        cells.push(<td key={"subject" + i} id={"subject" + i}>{queueData[i].subject}</td>);
        cells.push(<td key={"discord" + i} id={"discord" + i}>{!queueData[i].digitalConsultation ? "Datatorget" : "Discord"}</td>);

        if (isAuthenticated && userRoles.includes("ROLE_ADMIN")) {
                cells.push(<td key={"actions" + i} id={"action" + i}>{
                    <>
                        <ConfirmButton onClick={() => confirmDoneEntity(queueData[i].id)}>Ferdig</ConfirmButton>
                        <DeleteButton className="ml-2" onClick={() => deleteQueueEntity(queueData[i].id)}>Slett</DeleteButton>
                    </>
                }</td>);
        }
        rows.push(<tr key={i} id={rowId}>{cells}</tr>);
    }

    const tableHead = <TableHead defaultColumns={defaultColumns} loggedInColumns={loggedInColumns} isAuthenticated={isAuthenticated}/>;
    const tableBody = <tbody>{rows}</tbody>;

    return (
        <Table striped bordered hover responsive className="mb-4">{tableHead}{tableBody}</Table>
    );
};

export default queueTable;