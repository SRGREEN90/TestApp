import React from 'react'
import {getTreeRowsParamsType} from "../../../../main/dal/api/api";
import styles from './Table.module.scss'



type TablePropsType = {
    items: getTreeRowsParamsType
}
export default function ({items}: TablePropsType){
    return (
        <div className={styles.table}>
            <div className={styles.item}>
                <div>{items.child}</div>
                <div>{items.rowName}</div>
                <div>{items.salary}</div>
                <div>{items.equipmentCosts}</div>
                <div>{items.overheads}</div>
                <div>{items.estimatedProfit}</div>
            </div>

        </div>
    )
}