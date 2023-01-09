import React, {useState} from "react";
import styles from "./Navbar.module.scss"
import icon from "../assets/nameIcon.png"
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/RoutesComponent";

type NameProjectPropsType = {
    setNameWorks: (nameWorks: string) => void
}
const links = [
    {
        title: 'По проекту',
        path: PATH.BY_PROJECT,
        fullTitle: 'По проекту'
    },
    {
        title: 'Объекты',
        path: PATH.OBJECTS,
        fullTitle: 'Объекты'
    },
    {
        title: 'РД',
        path: PATH.WD,
        fullTitle: 'Рабочая документация'
    },
    {
        title: 'МТО',
        path: PATH.MTO,
        fullTitle: 'Материально-техническое обеспечение'
    },
    {
        title: 'СМР',
        path: PATH.CIW,
        fullTitle: 'Cтроительно-монтажные работы'
    },
    {
        title: 'График',
        path: PATH.CHART,
        fullTitle: 'График'
    },
    {
        title: 'МиМ',
        path: PATH.MAM,
        fullTitle: 'Маркетинг и Менеджмент'
    },
    {
        title: 'Рабочие',
        path: PATH.WORKERS,
        fullTitle: 'Рабочие'
    },
    {
        title: 'Капвложения',
        path: PATH.CI,
        fullTitle: 'Капвложения'
    },
    {
        title: 'Бюджет',
        path: PATH.BUDGET,
        fullTitle: 'Бюджет'
    },
    {
        title: 'Финансирование',
        path: PATH.FINANCING,
        fullTitle: 'Финансирование'
    },
    {
        title: 'Панорамы',
        path: PATH.PANORAMAS,
        fullTitle: 'Панорамы'
    },
    {
        title: 'Камеры',
        path: PATH.CAMERAS,
        fullTitle: 'Камеры'
    },
    {
        title: 'Поручения',
        path: PATH.ASSIGNMENTS,
        fullTitle: 'Поручения'
    },
    {
        title: 'Контрагенты',
        path: PATH.COUNTERPARTIES,
        fullTitle: 'Контрагенты'
    },
]

export default function Navbar({setNameWorks}: NameProjectPropsType) {

    return <div className={styles.names}>
        {links.map(link =>
            <div className={styles.namesStyles}>

                <div className={styles.img}>
                    <img style={{width: '16px', height: '16px'}} src={icon} alt=""/>
                </div>

                <NavLink
                    className={styles.title}
                    onClick={(e) => setNameWorks(link.fullTitle)}
                    to={link.path}
                    style={({isActive}) => ({color: 'white', textDecoration: "none"})}>
                    {link.title}
                </NavLink>
            </div>
        )}
    </div>
}

