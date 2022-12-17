import React from 'react';
import styles from "./App.module.scss";
import grid from "./components/assets/grid.png";
import backArrow from "./components/assets/backArrow.png";
import arrow from "./components/assets/arrow.png";
import Navbar from "./components/navbar/Navbar";
import WorksTable from "./components/worksDescription/worksTable/WorksTable";

export default function App() {
    const projectNames = [
        "По проекту",
        "Объекты",
        "РД",
        "МТО",
        "СМР",
        "График",
        "МиМ",
        "Рабочие",
        "Капвложения",
        "Бюджет",
        "Финансирование",
        "Панорамы",
        "Камеры",
        "Поручения",
        "Контрагенты"
    ]

    return (
        <div className={styles.size}>

            <header className={styles.header}>
                <div className={styles.icons}>
                    <img style={{width: '16px', height: '16px'}} src={grid} alt=""/>
                    <img style={{width: '18px', height: '15px', paddingLeft: '20px'}} src={backArrow} alt=""/>
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
                    <img style={{width: '12px', height: '7.41px'}} src={arrow} alt=""/>
                </div>
            </header>

            <header className={styles.worksTitle}>
                Строительно-монтажные работы
            </header>

            <nav className={styles.nav}>
                <Navbar
                    name={projectNames}
                />
            </nav>
            <div className={styles.table}>
                <WorksTable/>
            </div>
        </div>
    );
}
