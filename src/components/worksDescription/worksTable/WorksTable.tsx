import React, {useEffect} from 'react';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import Table from './table/Table';
import styles from "./WorksTable.module.scss"
import {AppRootStateType} from "../../../main/bll/store";
import {CreateRowInEntityResponseType, getTreeRowsParamsType} from "../../../main/dal/api/api";


export default function WorksTable() {

    const rowList = useSelector<AppRootStateType, getTreeRowsParamsType[]>(state => state.items)

   // const newRows = useSelector<AppRootStateType, CreateRowInEntityResponseType>(state => state.newRows)

    // useEffect(()=>{
    //     console.log(newRows)
    // },[newRows])

    return (
        <div className={styles.header}>
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
                rowList.length > 0
                    ? rowList.map((rows) => {
                            return <Table
                                key={rows.id}
                                rows={rows}
                            />
                        }
                    )
                    : <div style={{padding: '100px 250px'}}>Ничего не найдено!!!</div>
            }
        </div>

    )
}
