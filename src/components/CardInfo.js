import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css";
function CardInfo(props) {
    const { name, year, color,id } = props.info;
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='mx-auto my-4' style={{backgroundColor:`${color}`,width:"250px",height:"200px"}}>
            <Link  to={`/${id}`} style={{textDecoration:"none",color:"black"}}>
                <p className={styles.nameStyle}>{name}</p>
                <p className={styles.yearStyle}>{year}</p>
            </Link>
        </div>
    </div>
  )
}

export default CardInfo