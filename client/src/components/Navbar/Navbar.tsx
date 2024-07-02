import React from 'react'
import style from './Navbar.module.css'
import bullet from '../../assets/images/Ellipse.png'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
    

    return (
        <>
            <nav className={style.navbar}>
                <a href='#about' className={style.text}>О НАС</a> 
                <img className={style.point} src={bullet}/>
                <a href='#catalog' className={style.text}>КАТАЛОГ</a>
                <img className={style.point} src={bullet}/>
                <a href='#review' className={style.text}>ОТЗЫВЫ</a>
                <img className={style.logo} src={logo}/>
                <a href='#payment' className={style.text}>ОПЛАТА И ДОСТАВКА</a>
                <img className={style.point} src={bullet}/>
                <a href='contacts' className={style.text}>КОНТАКТЫ</a>

                 



            </nav>
        </>
    )
}
