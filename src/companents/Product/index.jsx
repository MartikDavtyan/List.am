import React from 'react'
import ProductDiv from './ProductDiv'

export default function index({dataBassa}) {
  return (
    <div className="product-main">
        {dataBassa.productBassa.map((div)=>{
            return <ProductDiv key={div.id} name={div.name} arr={div.arr}/>
        })}
    </div>
  )
}
