import React, {ChangeEvent, useState} from 'react'
import styles from './Table.module.scss'
import doc from "../../../assets/doc.png";
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
    rows: RowsPropsType
}
export default function ({rows}: TablePropsType) {

    const [editMode, setEditMode] = useState<boolean>(false)

    const [rowName, setRowName] = useState<string>('')
    const [salary, setSalary] = useState<string>('')
    const [equipmentCosts, setEquipmentCosts] = useState<string>('')
    const [overheads, setOverheads] = useState<string>('')
    const [estimatedProfit, setEstimatedProfit] = useState<string>('')

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }
    const onBlurHandler = () => {
        setEditMode(false)
    }

    const rowNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRowName(e.currentTarget.value)
    }
    const salaryHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSalary(e.currentTarget.value)
    }
    const equipmentCostsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEquipmentCosts(e.currentTarget.value)
    }
    const overheadsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setOverheads(e.currentTarget.value)
    }
    const estimatedProfitHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEstimatedProfit(e.currentTarget.value)
    }


    let content = null
    if (editMode) {
        content = (
            <>
                <div className={styles.item}>
                <span>
                    <img
                        style={{width: '16px', height: '16px'}}
                        src={doc} alt="folder"
                    />
                </span>
                    <div><input onChange={rowNameHandler} value={rowName}/></div>
                    <div><input onChange={salaryHandler} value={salary}/></div>
                    <div><input onChange={equipmentCostsHandler} value={equipmentCosts}/></div>
                    <div><input onChange={overheadsHandler} value={overheads}/></div>
                    <div><input onChange={estimatedProfitHandler} value={estimatedProfit}/></div>
                </div>
            </>
        )
    } else {
        content = (
            <>
                <div className={styles.item}>
                <span>
                    <img
                        style={{width: '16px', height: '16px'}}
                        src={doc} alt="folder"
                    />
                </span>
                    <div>{rows.rowName}</div>
                    <div>{rows.salary}</div>
                    <div>{rows.equipmentCosts}</div>
                    <div>{rows.overheads}</div>
                    <div>{rows.estimatedProfit}</div>
                </div>
            </>
        )
    }
    return (

        <div
            className={styles.table}
            onBlur={onBlurHandler}
            onDoubleClick={onDoubleClickHandler}
        >
            {content}
        </div>
    )
}