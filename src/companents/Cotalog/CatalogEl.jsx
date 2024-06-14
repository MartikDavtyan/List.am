import React from 'react'
import '../../companents-css/Cotalog/cotalogEl.css'

export default function CatalogEl({img,text}) {
  return (
    <div className="cotalog-divs">
        <a>
            <img className="cotalog-icons" src={img}  />
        {text}</a>
    </div>
  )
}
