import React from 'react'
import ProductDivEl from './ProductDivEl'
import '../../companents-css/Product/productDiv.css'

export default function ProductDiv({name,arr}) {
  return (
    <div className="products-cotalog">
    <p style={{fontSize:"20px"}}>{name}</p>
    <div className="products">
        {arr.map((el)=>{
            return <ProductDivEl key={el.id} img={el.img} price={el.price} info_1={el.info_1} info_2={el.info_2} userImg={el.userImg} userName={el.userName} text={el.text} info={el.info} finishInfo={el.finishInfo} time={el.time} />
        })}
    </div>
</div>
  )
}
