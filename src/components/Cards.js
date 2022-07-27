import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardInfo from './CardInfo'


function Cards() {

    const [infos, setInfos] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    const getAllInfo = ()=>{
        axios.get("https://reqres.in/api/unknown")
        .then((res)=>{
            console.log(res.data.data)
            setLoading(false)
            setInfos(res.data.data)

        }).catch((err)=>{
            console.log(err)
            setError(err)
            setLoading(false)
        })
    }
    useEffect(()=>{
        getAllInfo()
    },[])

    const cardInfo = infos.map((info)=><CardInfo info={info} key={info.id}/>)

    if(loading){
        return(
            <div className='container' style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <p className='spinner-border text-info'></p>
                <p className='text-center'>Loading...</p>
            </div>
        )
    }
    else{
        return (
            <div className='container'>
                <div className='row'>
                    {
                        error ? error : cardInfo
                    }
                </div>
            </div>
          )
    }
    
}

export default Cards