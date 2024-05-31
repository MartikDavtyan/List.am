import React from 'react'
import '../../companents-css/Cotalog/cotalogEl.css'

export default function CatalogEl({img,text}) {
  return (
    <div class="cotalog-divs">
        <a>
            <img class="cotalog-icons" src={img}  />
        {text}</a>
    </div>
  )
}
