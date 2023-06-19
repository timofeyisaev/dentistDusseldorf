import React from 'react';
import s from './style.module.css';
import star from '../Images/star.png';
import starline from '../Images/starline.png';
import texturetop from '../Images/texturetop.png';


export default function ThirdBlock() {
  return (
    <div className={s.container}>
        <img src={texturetop} alt="texturetop" className={s.texturetop}/>
        <div className={s.descriptionContainer}>
            <div className={s.topContainer}>
            <h3>WIE EINE EINLAGEFÜLLUNG ENTSTEHT</h3>
            <img src={star} alt="star" className={s.star}/>
            </div>           
            <div className={s.bulletsContainer}>
                <div>
                    <p>• Karies entfernen (Präparation)</p>
                    <p>• Abdruck des präparierten Zahnes</p>
                    <p>• Für eine zahnfarbene Füllung muss jetzt die Farbe der</p>
                    <p>• Provisorische Füllung einsetzen</p>
                    <p>• Herstellung der Füllung im zahntechnischen Labor</p>
                </div>
                <div className={s.rightContainer}>                    
                    <p>• Zweiter Termin: Das Inlay wird zur Probe eingesetzt</p>
                    <p>• Bissprobe und eventuelle Korrektur</p>
                    <p>• Säuberung des Zahns</p>
                    <p>• Das Inlay wird eingesetzt</p>
                    <p>• Befestigungs-Material härtet aus</p>
                </div>           
            </div>
            <button>Termine online</button>
            
        
        </div>
        <img src={starline} alt="starline" className={s.starline}/>
        
    </div>
  )
}
