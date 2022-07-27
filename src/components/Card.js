import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from "./styles.module.css";
function Card() {

    const [info,setInfo] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const fetchData=()=>{
      axios.get(`https://reqres.in/api/unknown/${params.id}`)
      .then((res)=>{
        console.log(res.data.data)
        setLoading(false)
        setInfo(res.data.data)
      }).catch((err)=>{
        console.log(err)
        setError(err)
        setLoading(false)
      })
    }
    useEffect(()=>{
      fetchData()
    },[params.id])

    if(loading){
      return(
          <div className='container' style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <p className='spinner-border text-info'></p>
              <p className='text-center'>Loading...</p>
          </div>
      )
  }else{
    return (
        <>
          { error ? error :
            <div className='container' style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div style={{width:"500px",height:"500px",backgroundColor:`${info.color}`}}>
                <p className={styles.nameStyle} style={{fontSize:"60px"}}>{info.name}</p>
                <p className={styles.yearStyle} style={{fontSize:"60px"}}>{info.year}</p>
                <p style={{marginLeft:"50px",fontSize:"20px"}}>Pantone Value-</p>
                <p className={styles.pantoneStyle}>{info.pantone_value}</p>
              </div>
          </div>
        }
        </>
    )
  }
  
}

export default Card