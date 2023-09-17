import React from "react"
import { Header1 } from '../components/Header/Header1.tsx';
import MainNavigation from "../components/MainNavigation/MainNavigation.tsx";
import Table from "../components/Table/Table.tsx";

import './SuperLeagueHome.scss';

export const SuperLeagueHome = () => {
    return (
        <>
        <Header1/>
        <MainNavigation/>
        <main className="mainContent">
        <Table/>
        </main>
        </>
    )
};
export default SuperLeagueHome;