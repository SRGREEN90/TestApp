import React from 'react'
import {getTreeRowsParamsType} from "../../../../main/dal/api/api";
import styles from './Table.module.scss'
import EditableSpan from "../../../../main/ui/common/aditableSpan/EditableSpan";


type TablePropsType = {
    items: getTreeRowsParamsType
}
export default function (props: TablePropsType){
    return (
        <div className={styles.table}>
            <div>{props.items.child}</div>
            <EditableSpan>{props.items.rowName}</EditableSpan>
            <EditableSpan>{props.items.salary}</EditableSpan>
            <EditableSpan>{props.items.equipmentCosts}</EditableSpan>
            <EditableSpan>{props.items.overheads}</EditableSpan>
            <EditableSpan>{props.items.estimatedProfit}</EditableSpan>
        </div>
    )
}