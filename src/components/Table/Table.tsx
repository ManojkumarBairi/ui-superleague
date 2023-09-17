
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import './Table.scss';
export const Table = () => {

const [rowData] = useState([
    {teamName: "Toyota", model: "Celica", price: 35000},
    {teamName: "Ford", model: "Mondeo", price: 32000},
    {teamName: "Porsche", model: "Boxster", price: 72000}
]);

const [columnDefs] = useState<ColDef[]>([
    { field: 'teamName', editable: false },
    { field: 'model' , editable: false},
    { field: 'price', editable: false }
]);

    return (
        <>
        <header className="page-header">
        <div className="page-header__wrapper">
            <h1 className="page-header__title">Tables</h1>
        </div>
        </header>
        <div>
        <AgGridReact
         rowData={rowData}
         columnDefs={columnDefs}
         rowSelection={'single'}>
        </AgGridReact>
        </div>
        </>
    )
};

export default Table;
