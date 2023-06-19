import React, { useRef } from 'react';
import notfound from '../Images/notfound1.png';
import tooth from '../Images/tooth404.png';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';

export default function NotFoundBlock() {

    const nav_links = useRef();

  return (
    <div className={s.container}>
        <div ref={nav_links} className={s.leftContainer}>
            <h3>Oops! The page you looking for doesn’t exist</h3>
            <p>You may have misstyped the address or the page page may have moved. </p>
            <NavLink to='/'className={s.button}>Go to homepage</NavLink>
        </div>
        <div className={s.rightContainer}>
            <img src={tooth} alt="tooth" />
        </div>
        
       
    </div>
    
  )
}
