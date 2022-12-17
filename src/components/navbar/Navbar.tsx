import React from "react";
import s from "./Navbar.module.scss"
import icon from "../assets/nameIcon.png"

type NameProjectPropsType = {
    name: string[]
}

export const Navbar: React.FC<NameProjectPropsType> = (props) => {
    return <div className={s.names}>
        {props.name.map(n =>
            <div className={s.namesStyles}>
              <div className={s.img}>
                  <img style={{width: '16px', height: '16px'}} src={icon} alt=""/>
              </div>
                <div className={s.title}>{n}</div>
            </div>
        )}
    </div>
}