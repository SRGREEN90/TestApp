import React from 'react';
import styles from "./WorksTable.module.scss"

export default function WorksTable() {
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
            {/*{packs.length > 0*/}
            {/*    ? packs.map(pack => <Pack key={pack._id} pack={pack}/>)*/}
            {/*    : <div style={{padding: '16px 24px'}}>Ничего не найдено</div>}*/}
        </div>

    )
}

// <div className={styles.table}>
//     <div className={`${styles.header} ${styles.item}`}>
//         <div onClick={sortName} className={activeField === "name" ? `${styles.active} ${rotate}` : ""}>Name
//         </div>
//         <div onClick={sortCards}
//              className={activeField === "cardsCount" ? `${styles.active} ${rotate}` : ""}>Cards
//         </div>
//         <div onClick={sortUpdate} className={activeField === "updated" ? `${styles.active} ${rotate}` : ""}>Last
//             Updated
//         </div>
//         <div onClick={sortUserName}
//              className={activeField === "user_name" ? `${styles.active} ${rotate}` : ""}>Created by
//         </div>
//         <div>Actions</div>
//     </div>
//     {packs.length > 0
//         ? packs.map(pack => <Pack key={pack._id} pack={pack}/>)
//         : <div style={{padding: '16px 24px'}}>Ничего не найдено</div>}
// </div>