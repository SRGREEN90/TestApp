import React, {useEffect, useState} from 'react';
import styles from "./App.module.scss";
import grid from "./components/assets/grid.png";
import backArrow from "./components/assets/backArrow.png";
import arrow from "./components/assets/arrow.png";
import Navbar from "./components/navbar/Navbar";
import {useDispatch} from 'react-redux/es/hooks/useDispatch';
import {getTreeRowsTC} from "./main/bll/items-reducer";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {AppRootStateType} from "./main/bll/store";
import {RoutesComponent} from "./components/routes/RoutesComponent";

export const eID = 31463

export default function App() {
    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, any>>();

    const [nameWorks, setNameWorks] = useState<string>('')


    useEffect(() => {
        dispatch(getTreeRowsTC(eID))
    }, [dispatch])


    return (
        <div className={styles.size}>

            <header className={styles.header}>
                <div className={styles.icons}>
                    <img style={{width: '16px', height: '16px'}} src={grid} alt=""/>
                    <img style={{width: '18px', height: '15px', paddingLeft: '20px'}} src={backArrow} alt="backArrow"/>
                    <p>Просмотр</p>
                    <p>Управление</p>
                </div>
            </header>

            <header className={styles.project}>
                <div className={styles.projectTitle}>
                    <div>Название проекта</div>
                    <div style={{fontSize: '10px'}}>
                        Аббревиатура
                    </div>
                </div>

                <div className={styles.arrow}>
                    <img src={arrow} alt="arrow"/>
                </div>

            </header>

            <header className={styles.worksTitle}>
                <span>{nameWorks}</span>
            </header>

            <nav className={styles.nav}>
                <Navbar
                    setNameWorks={setNameWorks}
                />
            </nav>
            <div className={styles.table}>
                <RoutesComponent/>
            </div>
        </div>
    );
}

