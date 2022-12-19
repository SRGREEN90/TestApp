import React from 'react'
import {getTreeRowsParamsType} from "../../../../main/dal/api/api";
import styles from './Table.module.scss'
import folder from "../../../assets/folder.png";


type TablePropsType = {
    items: getTreeRowsParamsType
}
export default function ({items}: TablePropsType){
    console.log('items-', items)
    return (
        <div className={styles.table}>
            <div className={styles.item}>
                <span>
                    <img
                        style={{width: '19.02px', height: '15.43px'}}
                        src={folder} alt="folder"
                    />
                </span>
                <div>rowName{items.rowName}</div>
                <div>salary{items.salary}</div>
                <div>equipmentCosts{items.equipmentCosts}</div>
                <div>overheads{items.overheads}</div>
                <div>estimatedProfit{items.estimatedProfit}</div>
            </div>

        </div>
    )
}