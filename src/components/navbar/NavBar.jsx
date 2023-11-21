import React, { useState, useEffect } from 'react';
import styles from "../navbar/navbar.module.css"
import portada from "../../image/headerdrone3.jpg"
import logo2 from "../../image//droneicon.jpg"
import CartWidget from '../cartwidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';


export default function NavBar() { 
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasTitle, setHasTitle] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 502 && window.scrollY < 1285){
        setHasTitle(true);
      }
      else {
        setHasTitle(false);
      }
      if (window.scrollY < 300) {
        setHasScrolled(true);
        
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={hasScrolled ? styles.navBorderColor : styles.nav}>      
      <Link className={hasTitle ? styles.link_img_current : styles.link_img} to='/'>
      <img  src={logo2} alt=""/>
      </Link>        
        <h1 className={hasTitle ? styles.currentTitle : styles.notCurrentTitle}>New Technologies</h1>
        <ul>
          <li><i className="fa fa-home"></i><Link to='/' > HOME</Link></li>
          <li className={styles.products}>
          <i className="fa fa-fighter-jet	"></i>
            <Link to={`/products`}> PRODUCTS</Link>
          <ul className={styles.products_list}>
                    <li className={styles.agri_drone}>
                    <Link to={`/category/agricola`}> Agricole Drone</Link>
                      
                    <ul className={styles.drone_list}>
                    <li><Link to={`/item/1`}> Spraying Drone</Link></li>
                    <li><Link to={`/item/2`}> Seeding Drone</Link></li>
                    <li><Link to={`/item/3`}> Crop Monitoring Drone</Link></li>
                    </ul></li>
                    <li><Link to={`/category/mapping`}> Mapping Drone</Link></li>
                    <li><Link to={`/category/cargo`}> Cargo Drone</Link></li>
                </ul></li>
          <li>
          <i className="fa fa-group"></i>
            <a href="#"> ABOUT US</a></li>
          <li>
            <i className="fa fa-envelope"></i>
            <a href="#"> CONTACT US</a></li>
          <li><CartWidget /></li>
        </ul>
      </nav>

      <div className={styles.portada}>      
    <img src={portada} className={styles.portadaimg} alt="" />  
    <h1 className={styles.portadatitle}>LITORAL DRONE STORE</h1>
    
    <img className={styles.logo2} src={logo2} alt=""/>
    </div>  
    </>
  )
}
