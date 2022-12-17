import React from 'react';
import s from "./App.module.scss";
import grid from "./components/assets/grid.png";
import backArrow from "./components/assets/backArrow.png";
import arrow from "./components/assets/arrow.png";
import {Navbar} from "./components/navbar/Navbar";
import {WorksList} from "./components/worksDescription/WorksList";

const App = () => {
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
        <div className={s.size}>

            <header className={s.header}>
                <div className={s.icons}>
                    <img style={{width: '16px', height: '16px'}} src={grid} alt=""/>
                    <img style={{width: '18px', height: '15px', paddingLeft: '20px'}} src={backArrow} alt=""/>
                    <p style={{paddingLeft: '20px', color: '#ffffff'}}>Просмотр</p>
                    <p style={{paddingLeft: '20px', color: '#ffffff'}}>Управление</p>
                </div>
            </header>

            <header className={s.project}>
                <div className={s.projectTitle}>
                    <div>Название проекта</div>
                    <div style={{fontSize: '12px'}}>
                        Аббревиатура
                    </div>
                </div>

                <div className={s.arrow}>
                    <img style={{width: '12px', height: '7.41px'}} src={arrow} alt=""/>
                </div>
            </header>

            <header className={s.worksTitle}>
                Строительно-монтажные работы
            </header>

            <nav className={s.nav}>
                <Navbar
                    name={projectNames}
                />
            </nav>
            <div className={s.main}>
                   <WorksList />
            </div>
        </div>
    );
}

export default App;
