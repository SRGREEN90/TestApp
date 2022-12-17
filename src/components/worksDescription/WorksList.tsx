import React from 'react';
import s from "./WorksList.module.scss"
import {WorksTable} from "./worksTable/WorksTable";

export const WorksList = () => {
    return (
        <div className={s.main}>

            <WorksTable/>


        </div>

    )
}