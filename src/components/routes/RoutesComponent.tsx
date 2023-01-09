import React from 'react';
import {Routes, Route} from "react-router-dom";


import WorksTable from "../worksDescription/worksTable/WorksTable";

export const PATH = {
    BY_PROJECT: '/by project',
    OBJECTS: '/objects',
    WD: '/working-documentation',
    MTO: '/material-and-technical-support',
    CIW: '/construction-and-installation-works',
    CHART: '/chart',
    MAM: '/marketing and management',
    WORKERS: '/workers',
    CI: '/capital-investments',
    BUDGET: '/budget',
    FINANCING: '/financing',
    PANORAMAS: '/panoramas',
    CAMERAS: '/cameras',
    ASSIGNMENTS: '/assignments',
    COUNTERPARTIES: '/counterparties',
}

export const RoutesComponent = () => {
    return (
        <>
            <Routes>
                {/*<Route path={"/"} element={<App/>}/>*/}
                <Route path={PATH.BY_PROJECT} element={'ПО ПРОЕКТУ'}/>
                <Route path={PATH.OBJECTS} element={'OBJECTS'}/>
                <Route path={PATH.WD} element={'WD'}/>
                <Route path={PATH.MTO} element={'MTO'}/>
                <Route path={PATH.CIW} element={<WorksTable/>}/>
                <Route path={PATH.CHART} element={'CHART'}/>
                <Route path={PATH.MAM} element={'MAM'}/>
                <Route path={PATH.WORKERS} element={'WORKERS'}/>
                <Route path={PATH.CI} element={'CI'}/>
                <Route path={PATH.BUDGET} element={'BUDGET'}/>
                <Route path={PATH.FINANCING} element={'FINANCING'}/>
                <Route path={PATH.PANORAMAS} element={'PANORAMAS'}/>
                <Route path={PATH.CAMERAS} element={'CAMERAS'}/>
                <Route path={PATH.ASSIGNMENTS} element={'ASSIGNMENTS'}/>
                <Route path={PATH.COUNTERPARTIES} element={'COUNTERPARTIES'}/>
                {/*<Route path={"/*"} element={'Some error!!!'}/>*/}
            </Routes>
        </>
    );
};