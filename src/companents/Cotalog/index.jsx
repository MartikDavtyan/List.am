import React from 'react'
import CatalogEl from './CatalogEl'

export default function index({dataBassa}) {
  return (
    <div className="cotalog">
            {dataBassa.cotalogBassa.map((el) => (
                <CatalogEl key={el.id} img={el.img} text={el.text} />
            ))}
        </div>
  )
}
