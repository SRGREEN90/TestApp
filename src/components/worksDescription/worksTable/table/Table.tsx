import React from 'react'
import {getTreeRowsParamsType} from "../../../../main/dal/api/api";
import styles from './Table.module.scss'
import folder from "../../../assets/folder.png";


type TablePropsType = {
    items: getTreeRowsParamsType
}
export default function ({items}: TablePropsType){
    return (
        <div className={styles.table}>
            <div className={styles.item}>
                <div>
                    <img
                        style={{width: '19.02px', height: '15.43px'}}
                        src={folder} alt="folder"
                    />
                </div>
                <div>{items.rowName}</div>
                <div>{items.salary}</div>
                <div>{items.equipmentCosts}</div>
                <div>{items.overheads}</div>
                <div>{items.estimatedProfit}</div>
            </div>

        </div>
    )
}