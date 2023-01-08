import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './Table.module.scss'
import documentIcon from "../../../assets/doc.png";
import garbage from "../../../assets/garbage.png";
import line from "../../../assets/line.png";
import {createRowInEntityTC} from "../../../../main/bll/create-row-reducer";
import {eID} from '../../../../App';
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {AppRootStateType} from "../../../../main/bll/store";
import {deleteRowTC, getTreeRowsTC} from "../../../../main/bll/items-reducer";


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
    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, any>>();

    const [editMode, setEditMode] = useState<boolean>(false)


    const [rowName, setRowName] = useState<string>('')
    const [salary, setSalary] = useState<number>(0)
    const [equipmentCosts, setEquipmentCosts] = useState<number>(0)
    const [overheads, setOverheads] = useState<number>(0)
    const [estimatedProfit, setEstimatedProfit] = useState<number>(0)

    const [focus, setFocus] = useState<boolean>(false)
    const onFocusAddHandler = () => {
        setFocus(true)
    }
    const onFocusRemoveHandler = () => {
        setFocus(false)
    }
    const mainClass = focus ? styles.iconBlock_active : styles.iconBlock


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
        // @ts-ignore
        setSalary(e.currentTarget.value)
    }
    const equipmentCostsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setEquipmentCosts(e.currentTarget.value)
    }
    const overheadsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setOverheads(e.currentTarget.value)
    }
    const estimatedProfitHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setEstimatedProfit(e.currentTarget.value)

    }

    const createRowHandler = () => {
        dispatch(
            createRowInEntityTC({
            id: eID, model: {
                equipmentCosts: 0,
                estimatedProfit: 0,
                machineOperatorSalary: 0,
                mainCosts: 0,
                materials: 0,
                mimExploitation: 0,
                overheads: 0,
                parentId: null,
                rowName: '',
                salary: 0,
                supportCosts: 0
            }
        }))
    }

    const deleteRowHandler = () => {
        dispatch(deleteRowTC({id: eID, rowId: rows.id}))
    }

    return <div
        className={styles.table}
        onBlur={onBlurHandler}
        onDoubleClick={onDoubleClickHandler}
    >
        {editMode ?
            (
                <div className={styles.item}>
                    <div>
                        <img className={styles.doc}
                             style={{width: '16px', height: '16px'}}
                             src={documentIcon}
                             alt="documentIcon"
                        />
                    </div>
                    <div><input onChange={rowNameHandler} value={rowName}/></div>
                    <div><input onChange={salaryHandler} value={salary}/></div>
                    <div><input onChange={equipmentCostsHandler} value={equipmentCosts}/></div>
                    <div><input onChange={overheadsHandler} value={overheads}/></div>
                    <div><input onChange={estimatedProfitHandler} value={estimatedProfit}/></div>
                </div>
            )
            : (
                <>
                    <div className={styles.item}>
                        <div onMouseLeave={onFocusRemoveHandler} className={mainClass}>
                            <img
                                className={styles.doc}
                                onClick={createRowHandler}
                                onMouseOver={onFocusAddHandler}
                                src={documentIcon}
                                alt="documentIcon"
                            />
                                <img
                                onClick={deleteRowHandler}
                                className={styles.garbage}
                                src={garbage}
                                alt="garbage"
                            />
                        </div>
                        <div>{rows.rowName}</div>
                        <div>{rows.salary}</div>
                        <div>{rows.equipmentCosts}</div>
                        <div>{rows.overheads}</div>
                        <div>{rows.estimatedProfit}</div>
                    </div>
                </>
            )
        }
    </div>
}

