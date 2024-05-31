import React from 'react'
import '../../companents-css/Cotalog/cotalog.css'
import CatalogEl from './CatalogEl'
export default function Cotalog() {
    const cotalogBassa=[
        {
            id:1,
            img:"https://www.list.am/img/c/54.png",
            text:"Անշարժ գույք"
        },
        {
            id:2,
            img:"https://www.list.am/img/c/16.png",
            text:"Տրանսպորտ"
        },
        {
            id:3,
            img:"https://www.list.am/img/c/65.png",
            text:"Ծառայություններ"
        },
        {
            id:4,
            img:"https://www.list.am/img/c/29.png",
            text:"Աշխատանք"
        },
        {
            id:5,
            img:"https://www.list.am/img/c/4.png",
            text:"Էլեկտրոնիկա"
        },
        {
            id:6,
            img:"https://www.list.am/img/c/26.png",
            text:"Կենցաղային տեխնիկա"
        },
        {
            id:7,
            img:"https://www.list.am/img/c/133.png",
            text:"Տուն և այգի"
        },
        {
            id:8,
            img:"https://www.list.am/img/c/17.png",
            text:"Նորաձևություն և ոճ"
        },
        {
            id:9,
            img:"https://www.list.am/img/c/27.png",
            text:"Մանկական աշխարհ"
        },
        {
            id:10,
            img:"https://www.list.am/img/c/39.png",
            text:"Հոբբի և սպորտ"
        },
        {
            id:11,
            img:"https://www.list.am/img/c/37.png",
            text:"Կենդանիներ"
        },
        {
            id:12,
            img:"https://www.list.am/img/c/14.png",
            text:"Մթերք և ըմպելիքներ"
        },
        {
            id:13,
            img:"https://www.list.am/img/c/286.png",
            text:"Վերանորոգում և շինարարություն"
        },
        {
            id:14,
            img:"https://www.list.am/img/c/84.png",
            text:"Բիզնես և սարքավորումներ"
        },
        {
            id:15,
            img:"https://www.list.am/img/c/15.png",
            text:"Այլ"
        }
    ]
    return (
        <div className="cotalog">
            {cotalogBassa.map((el) => (
                <CatalogEl key={el.id} img={el.img} text={el.text} />
            ))}
        </div>
    );
}
