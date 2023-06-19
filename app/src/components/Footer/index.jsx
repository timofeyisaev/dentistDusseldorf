import React from 'react';
import s from './style.module.css'
import { NavLink } from 'react-router-dom';
import logo2 from '../Images/logo2.png';
import phone from '../Images/phonefooter.png';
import clock from '../Images/clockfooter.png';
import navi from '../Images/navifooter.png';
import facebook from '../Images/facebookfooter.png';
import insta from '../Images/instafooter.png';
import youtube from '../Images/youtubefooter.png';
import pinterest from '../Images/pinterestfooter.png';


export default function Footer() {


const btnScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        window.scrollBy(0, -50);
        setTimeout(btnScrollUp, 10);    
    }
}


  return (
    <div className={s.mainContainer}>
        <div className={s.leftContainer}>
            <div className={s.topBlock}>
                <div className={s.topBlockFirst}>
                    <img src={logo2} alt="Logo" className={s.logo} />
                    <div className={s.about}>
                        Medizinisches Versorgungszentrum für Zahnheilkunde, Kinder- und Jugendzahnheilkunde und Kieferorthopädie.
                    </div>
                </div>

                <div className={s.secondBlockFirst}>
                    <div className={s.phone}>
                        <div>
                        <img src={phone} alt="phone pic" />
                        </div>
                        <div>
                            <u>0211 / 9462794690</u>                        
                        <br /> 
                            (Kassen oder privat)
                        </div>                        
                    </div>

                    <div className={s.clock}>
                        <div className={s.clockPic}>
                        <img src={clock} alt="clock pic" />
                        </div>
                        <div>                            
                            Mo. – Fr. 08.00 – 21.00 Uhr                   
                        <br /> 
                            Samstag 09.00 – 14.00 Uhr    
                        </div>                        
                    </div>

                    <div className={s.phone}>
                        <div>
                        <img src={navi} alt="navi pic" />
                        </div>
                        <div>
                            Werdener Str. 6, 40227 Düsseldorf                       
                        <br /> 
                            <a href="https://goo.gl/maps/LCMcegHFqM6cLg7K6">Google Maps</a>
                        </div>                        
                    </div>

                </div>

                <div className={s.media}>
                    <div>
                    <img src={facebook} alt="" />
                    </div>
                    <div><img src={insta} alt="" /></div>
                    <div><img src={youtube} alt="" /></div>
                    <div><img src={pinterest} alt="" /></div>  
                </div>
                

            </div>

            <div className={s.bottomBlock}>
                <p>Impressum</p>
                <p>Datenschutz</p>
                <p>Downloads</p>
                <p>Service</p>
                <p>Dental-Lexikon</p>
            </div>

        </div>
        
        <div className={s.btnUp} onClick={btnScrollUp}>
            <NavLink to='/' >Nach oben</NavLink>
            <div className={s.arrowContainer}>
                <div className={s.arrow1}></div>
                <div className={s.arrow2}></div>
            </div>
            
        </div>
        
    
    </div>
  )
}
