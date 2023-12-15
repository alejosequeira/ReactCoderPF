import React, { useState, useEffect } from 'react';
import styles from "../navbar/navbar.module.css"
import portada from "../../image/headerdrone3.jpg"
import logo2 from "../../image/droneicon.jpg"
import CartWidget from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom';



export default function NavBar() {
  const [sectionTitles] = useState([

    { title: '', start: 0, end: 389 },
    { title: 'New Technologies', start: 390, end: 1102 },
    { title: 'Products', start: 1202, end: 2618 },
  ]);
  const [currentTitle, setCurrentTitle] = useState('');
  const [hasTitle, setHasTitle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const activeSection = sectionTitles.find(section => scrollY >= section.start && scrollY < section.end);

      if (activeSection) {
        setCurrentTitle(activeSection.title);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionTitles]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && window.scrollY < 2618) {
        setHasTitle(true);
      }
      else {
        setHasTitle(false);
      }
      if (window.scrollY < 200) {
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
        <a className={hasTitle ? styles.link_img_current : styles.link_img} href="#">
          <img className={styles.imagen_logo} src={logo2} alt="" />
        </a>

        <h1 className={styles.currentTitle}>{currentTitle}</h1>

        <ul>
          <li><i className="fa fa-home"></i><Link to='/' > HOME</Link></li>
          <li className={styles.products}>
            <i className="fa fa-fighter-jet	"></i>
            <Link to={`/products`}> PRODUCTS</Link>
            <ul className={styles.products_list}>
              <li className={styles.agri_drone}>
                <Link to={`/category/agricola`}> Agricole Drone</Link>

                <ul className={styles.drone_list}>
                  <li><Link to={`/item/3bQodePb5eOdZA9cX5Pw`}> DJI T40</Link></li>
                  <li><Link to={`/item/GjWcJhHwFhcfoGOQgoqd`}> JIYI G20</Link></li>
                  <li><Link to={`/item/HsIstHxck6f5aiBHKpO9`}> XAG P100 PRO</Link></li>
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
          <li className={styles.cart_widget}><CartWidget /></li>
        </ul>
      </nav>

      <div className={styles.portada}>
        <img src={portada} className={styles.portadaimg} alt="" />
        <h1 className={styles.portadatitle}>LITORAL DRONE STORE</h1>
        <Link to='/'>
          <img className={styles.logo2} src={logo2} alt="" /></Link>
      </div>
    </>
  )
}
