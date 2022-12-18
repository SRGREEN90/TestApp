import React, {useEffect} from "react";
import styles from "./Navbar.module.scss"
import icon from "../assets/nameIcon.png"
import {AppRootStateType, useAppDispatch} from "../../main/bll/store";
import {createRowInEntityTC} from "../../main/bll/items-reducer";
import {eID} from "../../App";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";

type NameProjectPropsType = {
    name: string[]
}

export default function Navbar(props: NameProjectPropsType){
  const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, any>>();
    //
    // function navHandler(e: string) {
    //     dispatch(getTreeRowsTC({id: eID, model: }))
    // }
    useEffect(() => {
        console.log(1212121)
       dispatch(createRowInEntityTC({id: eID, model: {
               equipmentCosts: 10,
               estimatedProfit: 10,
               machineOperatorSalary: 10,
               mainCosts: 10,
               materials: 10,
               mimExploitation: 10,
               overheads: 10,
               parentId: null,
               rowName: "string",
               salary: 30,
               supportCosts: 40
           }}))
    }, [])
    return <div className={styles.names}>
        {props.name.map(n =>
            <div className={styles.namesStyles}>
              <div className={styles.img}>
                  <img style={{width: '16px', height: '16px'}} src={icon} alt=""/>
              </div>
                <div className={styles.title}>{n}</div>
            </div>
        )}
    </div>
}

