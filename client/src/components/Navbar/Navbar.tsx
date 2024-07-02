import React from 'react'
import style from './Navbar.module.css'
import bullet from '../../assets/images/Ellipse.png'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
    

    return (
        <>
            <nav className={style.navbar}>
                <span className={style.text}>О НАС</span> 
                <img className={style.point} src={bullet}/>
                <span className={style.text}>КАТАЛОГ</span>
                <img className={style.point} src={bullet}/>
                <span className={style.text}>ОТЗЫВЫ</span>
                <img className={style.logo} src={logo}/>
                <span className={style.text}>ОПЛАТА И ДОСТАВКА</span>
                <img className={style.point} src={bullet}/>
                <span className={style.text}>КОНТАКТЫ</span>

                 



            </nav>
        </>
    )
}
