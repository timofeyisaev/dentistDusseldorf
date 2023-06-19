import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';

export default function NavBar() {

    const checkClass = ({isActive}) => isActive ? s.active : '';

    const nav_links = useRef();

return (
        <div className={s.navContainer}>
        <NavLink to='/' className={s.logo}></NavLink>
        <div className={s.firstBlock} ref={nav_links}>            
            <div className={s.elem} >
                <NavLink to='/team/' className={checkClass}>Team</NavLink>
                <div className={s.arrow}></div>
            </div>            
            <div className={s.elem}>
                <NavLink to='/praxis/' className={checkClass}>Praxis</NavLink>
                <div className={s.arrow}></div>
            </div>
            <div className={s.elem}>
                <NavLink to='/service/' className={checkClass}>Leistungen</NavLink>
                <div className={s.arrow}></div>
            </div>
            <div className={s.elem}>
                <NavLink to='/news/' className={checkClass}>News</NavLink>
                <div className={s.arrow}></div>
            </div>

            <div className={s.elem}>
                <NavLink to='/contact' className={checkClass}>Kontakt</NavLink>
                <div className={s.arrow}></div>
            </div>                      
        </div>
        <div className={s.contacts}>
            <div className={s.phone}>
                <div className={s.phoneIcon}></div>
                <p>0211 / 9462794634</p>
            </div>            
            <div className={s.address}>
                <div className={s.pinIcon}></div>
                <p>Werdener Str. 6, 40227 Düsseldorf</p>
            </div> 
        </div>
        <div className={s.appointmentBlock}>
            <div className={s.calendarIcon}></div>
            <p>Termine Online</p>            
        </div>
    </div>
  )
}
