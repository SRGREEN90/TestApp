import React from 'react'
import styles from './Table.module.scss'
import folder from "../../../assets/folder.png";
import {getTreeRowsParamsType} from "../../../../main/dal/api/api";


type RowsPropsType = {
    equipmentCosts: number,
    estimatedProfit: number,
    id: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    rowName: string,
    salary: number,
    supportCosts: number,
    total: number
}

type TablePropsType = {
    rows: getTreeRowsParamsType
}
export default function ({rows}: TablePropsType){
    console.log('rows ---', rows )
    return (
        <div className={styles.table}>
            <div className={styles.item}>
                <span>
                    <img
                        style={{width: '19.02px', height: '15.43px'}}
                        src={folder} alt="folder"
                    />
                </span>
                <div>{rows.rowName}</div>
                <div>{rows.salary}</div>
                <div>{rows.equipmentCosts}</div>
                <div>{rows.overheads}</div>
                <div>{rows.estimatedProfit}</div>
            </div>

        </div>
    )
}