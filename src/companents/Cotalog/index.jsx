import React from 'react'
import '../../companents-css/Cotalog/cotalog.css'
import CatalogEl from './CatalogEl'
export default function Cotalog() {
    
    return (
        <div className="cotalog">
            {cotalogBassa.map((el) => (
                <CatalogEl key={el.id} img={el.img} text={el.text} />
            ))}
        </div>
    );
}
