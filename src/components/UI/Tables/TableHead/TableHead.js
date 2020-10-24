import React from "react";

const tableHead = (props) => {

    /* ----- Create Tables Head ----- */

    let columns = [];
    props.defaultColumns.forEach(column => {
        columns.push(<th key={`${column} Header`} scope="col">{column}</th>);
    });

    if (props.isAuthenticated) {
        props.loggedInColumns.forEach(column => {
            columns.push(<th key={`${column} Header`} scope="col">{column}</th>);
        });
    }

    return (
        <thead key={"tableHead"} className="thead-dark">
        <tr>
            {columns}
        </tr>
        </thead>
    );
};

export default tableHead;