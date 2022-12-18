import React from 'react'
import {getTreeRowsParamsType} from "../../../../main/dal/api/api";
import styles from './Table.module.scss'



type TablePropsType = {
    items: getTreeRowsParamsType
}
export default function ({items}: TablePropsType){
    return (
        <div className={styles.table}>
            <span>{items.child}</span>
            <span>{items.rowName}</span>
            <span>{items.salary}</span>
            <span>{items.equipmentCosts}</span>
            <span>{items.overheads}</span>
            <span>{items.estimatedProfit}</span>
        </div>
    )
}