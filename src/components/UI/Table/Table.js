import React from "react";

const table = (props) => {

    /* ----- Create Table Head ----- */

    let columns = [];
    const defaultColumns =
        <>
            <th key={"queueNumberHeader"} scope="col"># I kø</th>
            <th key={"nameHeader"} scope="col">Navn</th>
            <th key={"subjectHeader"} scope="col">Emne</th>
            <th key={"discordHeader"} scope="col">Discord</th>
        </>;

    //The actions column is only visible to logged in users
    let loggedInColumns = props.user ? <th key={"actionsHeader"} scope="col">Handlinger</th> : null;

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
    for (let i = 0; i < props.entities.length; i++) {
        let rowId = "row" + i;

        let cells = [];
        cells.push(<td key={"entry" + i} id={"entry" + i}>{i + 1}</td>);
        cells.push(<td key={"name" + i} id={"name" + i}>{props.entities[i].name}</td>);
        cells.push(<td key={"subject" + i} id={"subject" + i}>{props.entities[i].subject}</td>);
        cells.push(<td key={"discord" + i}
                       id={"discord" + i}>{props.entities[i].digitalConsultation === false ? "Nei" : "Ja"}</td>);

        let actionButtons =
            <>
                <button className="btn btn-success" onClick={() => props.confirmDoneOnClick(props.entities[i])}>Ferdig</button>
                <button className="btn btn-danger ml-2" onClick={() => props.deleteOnClick(props.entities[i])}>Slett</button>
            </>;

        if (props.user) {
            //The current action buttons, Done and Delete, are only available to admins. If regular users are implemented and
            //are getting the opportunity to edit their queue entries, there will have to be some changes here.
            actionButtons = props.user.roles.includes("ROLE_ADMIN") ? actionButtons : null;
            cells.push(<td key={"actions" + i} id={"action" + i}>{actionButtons}</td>);
        }

        rows.push(<tr key={i} id={rowId}>{cells}</tr>);
    }

    const tableBody = <tbody>{rows}</tbody>;

    return (
        <table className="table table-striped mb-4">{tableHead}{tableBody}</table>
    );
};

export default table;