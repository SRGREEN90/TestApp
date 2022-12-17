import React from "react";
import styles from "./Navbar.module.scss"
import icon from "../assets/nameIcon.png"

type NameProjectPropsType = {
    name: string[]
}

export default function Navbar(props: NameProjectPropsType){
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

