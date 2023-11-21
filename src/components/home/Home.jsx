import React from 'react'
import styles from './home.module.css'
import ItemCount from '../item/count/ItemCount'
import droneV from '../../image/index-video.mp4'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../item/listcontainer/ItemListContainer'

const Home=()=> {
  return (
    <div>
        <h1 className={styles.title}>Our New Technologies</h1>
      <div className={styles.header}>
        <video data-pc={droneV} id="video" autoPlay loop muted src={droneV}></video>
      </div> 
      <ItemListContainer/>
    </div>

  )
}
export default Home;
