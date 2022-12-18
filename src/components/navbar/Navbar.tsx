import React from "react";
import styles from "./Navbar.module.scss"
import icon from "../assets/nameIcon.png"
import { itemsReducer} from "../../main/bll/items-reducer";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {AppRootStateType} from "../../main/bll/store";

type NameProjectPropsType = {
    name: string[]
}



export default function Navbar(props: NameProjectPropsType){
   // const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, any>>();
    //
    // function navHandle(n: string) {
    //     dispatch(createEntityTC())
    // }


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

