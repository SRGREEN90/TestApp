import React from 'react';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import Table from './table/Table';
import styles from "./WorksTable.module.scss"
import {AppRootStateType} from "../../../main/bll/store";
import {getTreeRowsParamsType} from "../../../main/dal/api/api";


export default function WorksTable() {

    const tableItems = useSelector<AppRootStateType, getTreeRowsParamsType[]>(state => state.items)

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
            {
                tableItems.length > 0
                    ? tableItems.map(items =>
                        <Table
                            key={items.id}
                            items={items}
                        />
                    )
                    : <div style={{padding: '100px 250px'}}>Ничего не найдено</div>
            }
        </div>

    )
}
