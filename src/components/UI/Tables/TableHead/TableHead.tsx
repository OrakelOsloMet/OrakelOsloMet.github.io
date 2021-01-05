import React from "react";

type TableHeadProps = {
    defaultColumns: string[],
    loggedInColumns: string[],
    isAuthenticated: boolean
}

const tableHead = (props: TableHeadProps) => {

    /* ----- Create Tables Head ----- */

    let columns: JSX.Element[] = [];
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