import React from 'react'
import styles from "../itemlistcontainer/itemlist.module.css"
import drone from "../img/headerdrone2.jpeg"
import droneV from "../img/index-video.mp4"
export default function ItemListContainer() {
  return (
    <>
    <body>
      <h1>New Technologies</h1>
      <div className={styles.header}>
      <video data-pc={droneV} id="video" autoPlay loop muted src={droneV}></video>
      </div>
      <video data-pc={droneV} id="video" autoPlay loop muted src={droneV}></video>
      <video data-pc={droneV} id="video" autoPlay loop muted src={droneV}></video>
      <div className={styles.itemlistcontainer}>
        
      </div>

    </body>
    </>
  )
}
