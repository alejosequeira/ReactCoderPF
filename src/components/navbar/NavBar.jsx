import React from 'react'
import styles from "../navbar/navbar.module.css"
import portada from "../img/headerdrone3.jpg"
import logo2 from "../img/droneicon.jpg"
import CartWidget from '../cartwidget/CartWidget'


export default function NavBar() {
  return (
    <>
      <img src={portada} className={styles.portada} alt="" />
      <nav>
        <a href="#">
          <img src={logo2} alt=""/>
        </a>
        <h1 className={styles.title}>
          LITORAL DRONE STORE
        </h1>
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><CartWidget /></li>

          {/* <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li> */}
        </ul>
      </nav>
    </>
  )
}
