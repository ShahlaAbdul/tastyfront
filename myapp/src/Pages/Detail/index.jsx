import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import "./style.scss"
import { useParams } from 'react-router-dom';

function Detail() {
    const [detail, setDetail] = useState([])
    
    const {id}= useParams();

useEffect(() => {
    fetch("http://localhost:3000/"+id)
    .then((res)=>res.json())
    .then((data)=>setDetail(data))
}, [])


    return (
        <div>
            <Helmet>
                <title>Detail Page</title>
            </Helmet>
            
            <div className="detail">
                {detail.map((x)=>(
                    <div className="detail_card" key={x._id}>
                        <ul>
                            <li>{x.image}</li>
                            <li>{x.name}</li>
                            <li>{x.description}</li>
                            <li>{x.price}</li>
                            
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail