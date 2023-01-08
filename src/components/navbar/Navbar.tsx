import React, {useEffect, useState} from "react";
import styles from "./Navbar.module.scss"
import icon from "../assets/nameIcon.png"
import {AppRootStateType, useAppDispatch} from "../../main/bll/store";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {eID} from "../../App";
import {deleteRowTC, getTreeRowsTC} from "../../main/bll/items-reducer";
import { createRowInEntityTC } from "../../main/bll/create-row-reducer";
import {useSelector} from "react-redux/es/hooks/useSelector";


type NameProjectPropsType = {
    projectNames: string[]
    setNameWorks: (nameWorks: string) => void
}

export default function Navbar({projectNames, setNameWorks}: NameProjectPropsType) {
    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, any>>();
    const [filter, setFilter] = useState(false)



    // useEffect(()=>{
    //     dispatch(createRowInEntityTC({id: eID, model: {
    //             equipmentCosts: 100,
    //             estimatedProfit: 100,
    //             machineOperatorSalary: 100,
    //             mainCosts: 100,
    //             materials: 100,
    //             mimExploitation: 100,
    //             overheads: 100,
    //             parentId: null,
    //             rowName: "Super Project",
    //             salary: 100,
    //             supportCosts: 100
    //         }}))
    //
    // },[dispatch])




    useEffect(()=>{
        dispatch(deleteRowTC({id: eID, rowId: 24798}))
    },[dispatch])

   const mainClassName = filter ? styles.active : styles.title

    function navHandler(name: string) {
        if (name === projectNames[0]) {
            setNameWorks('По проекту')
        } else if (name === projectNames[1]) {
            setNameWorks('Объекты')
        } else if (name === projectNames[2]) {
            setNameWorks('Рабочая документация')
        } else if (name === projectNames[3]) {
            setNameWorks('Материально-техническое обеспечение')
        } else if (name === projectNames[4]) {
            setNameWorks('Строительно-монтажные работы')
        } else if (name === projectNames[5]) {
            setNameWorks('График')
        } else if (name === projectNames[6]) {
            setNameWorks('Маркетинг и Менеджмент')
        } else if (name === projectNames[7]) {
            setNameWorks('Рабочие')
        } else if (name === projectNames[8]) {
            setNameWorks('Капвложения')
        } else if (name === projectNames[9]) {
            setNameWorks('Бюджет')
        } else if (name === projectNames[10]) {
            setNameWorks('Финансирование')
        } else if (name === projectNames[11]) {
            setNameWorks('Панорамы')
        } else if (name === projectNames[12]) {
            setNameWorks('Камеры')
        } else if (name === projectNames[13]) {
            setNameWorks('Поручения')
        } else if (name === projectNames[14]) {
            setNameWorks('Контрагенты')
        }
    }

    return <div className={styles.names}>
        {projectNames.map(name =>
            <div  className={styles.namesStyles}>
                <div className={styles.img}>
                    <img style={{width: '16px', height: '16px'}} src={icon} alt=""/>
                </div>
                <span
                    onClick={(e) => navHandler(name)}
                    className={mainClassName}
                >
                    {name}
                </span>
            </div>
        )}
    </div>
}

