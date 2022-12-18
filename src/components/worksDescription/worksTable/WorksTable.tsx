import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Table from './table/Table';
import styles from "./WorksTable.module.scss"
import {AppRootStateType} from "../../../main/bll/store";


export default function WorksTable() {

  //  const tableItems = useSelector<AppRootStateType, number[]>(state => state.items.eID)

    return (
        <div className={styles.table}>
            <div className={styles.item}>
                <div>
                    Уровень
                </div>
                <div>
                    Наименование работ
                </div>
                <div>
                    Основная з/п
                </div>
                <div>
                    Оборудование
                </div>
                <div>
                    Накладные расходы
                </div>
                <div>
                    Сметная прибыль
                </div>
            </div>
            {/*{tableItems.length > 0*/}
            {/*    ? tableItems.map(items => <Table key={items.eID} items={items}/>)*/}
            {/*    : <div style={{padding: '16px 24px'}}>Ничего не найдено</div>}*/}
        </div>

    )
}
