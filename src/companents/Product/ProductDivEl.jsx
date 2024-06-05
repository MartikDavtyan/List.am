import React from 'react'
import '../../companents-css/Product/productDivEl.css'

export default function ProductDivEl({img,price,info_1,info_2,userImg,userName,text,info,finishInfo,time}) {
  function modal(userImg,userName,text,info,finishInfo,time){
    console.log(userImg,userName,text,info,finishInfo,time)
  }
  return (
    <div className="product" onClick={modal(userImg,userName,text,info,finishInfo,time)}>
            <img className='img' src={img}/>
            <div className="price">{price}</div>
            <div className="info">{info_1}</div>
            <div className="info2">{info_2}</div>
    </div>
  )
}