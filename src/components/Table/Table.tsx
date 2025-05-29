
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import './Table.scss';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const Table = () => {
const currentDate = new Date().toISOString();
const [rowData] = useState([
    {Club: "Arsenal", Played: 38, Won: 25, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Manchester United", Played: 38, Won: 11, Drawn: 9, Lost: 18, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Liverpool FC", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Manchester City", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Chelsea", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Tottenham Hotspur", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Newcastle United", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Real Madrid", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "FC Barcelona", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "FC Bayern Munich", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "FC Dortmund", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Inter Milan", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "AC Milan", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Napoli", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "PSG", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Juventus", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Atheltico Madrid", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "Ajax", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "FC Sporting", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84},
    {Club: "FC Porto", Played: 38, Won: 9, Drawn: 9, Lost: 4, GF: 86, GA: 41, GD: 45, Points: 84}
]);

const [columnDefs] = useState<ColDef[]>([
    { field: 'Position', editable: false, width: 100 },
    { field: 'Club', editable: false },
    { field: 'Played' , editable: false, width: 100 },
    { field: 'Won', editable: false, width: 70  },
    { field: 'Drawn', editable: false , width: 80 },
    { field: 'Lost', editable: false, width: 70  },
    { field: 'GF', editable: false , width: 70 },
    { field: 'GA', editable: false, width: 70  },
    { field: 'GD', editable: false, width: 70  },
    { field: 'Points', editable: false , width: 80 },
]);

    return (
        <>
        <div className="page-hero">
        <header className="page-header">
        <div className="page-header__wrapper">
            <h6 className="page-header__title">Table 2024-2025</h6>
        </div>
        <div><p>{currentDate}</p></div>
        </header>
        </div>
        <div className="tabbedContent">                
        <div className="ag-theme-alpine" style={{ height: '100vh' }}>
        
        <AgGridReact
         rowData={rowData}
         columnDefs={columnDefs}>
        </AgGridReact>
        </div>
        </div>
        </>
    )
};

export default Table;
