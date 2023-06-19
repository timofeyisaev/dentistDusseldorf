import React from 'react';
import s from './style.module.css';
import humanpic from '../Images/humanpic.png';
import head from '../Images/head.png'


export default function FirstBlock() {
  return (
    <div className={s.container}>
        <div className={s.leftBlock}>
            <h4>
              Zähne erhalten – kleine Schäden beheben 
            </h4>
            <p>
            In Deutschland gefertigter Zahnersatz ist hochwertig und langlebig.
            </p>
            <button>
                Termine online
            </button>
            
        </div>
        <div className={s.mansContainer}>
            <img src={head} alt="Man's head" className={s.head}/>
            <img src={humanpic} alt="A human holding a magnifying glass pointing at a tooth" className={s.humanpic}/>            
        </div>
    </div>
  )
}
