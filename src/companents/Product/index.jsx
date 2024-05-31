import React from 'react'
import ProductDiv from './ProductDiv'
import '../../companents-css/Product/product.css'


export default function index() {
    const productBassa = [
        {
            id:1,
            name:'Կոմերցիոն անշարժ գույքի և գրասենյակների վարձակալություն >',
            arr:[
                {
                    id:1.1,
                    img:'https://s.list.am/h/177/80094177.webp',
                    price:'$5,000 ամսական',
                    info_1:'Գրասենյակային տարածք Թումանյան',
                    info_2:'180 քմ'
                },
                {
                    id:1.2,
                    img:'https://s.list.am/h/921/80222921.webp',
                    price:'3,400,000 ֏ ամսական',
                    info_1:'Շենք Արարատյան փողոցում',
                    info_2:'810 քմ'
                },
                {
                    id:1.3,
                    img:'https://s.list.am/h/612/76716612.webp',
                    price:'2,500,000 ֏ ամսական',
                    info_1:'Գրասենյակային տարածք',
                    info_2:'260 քմ'
                },
                {
                    id:1.4,
                    img:'https://s.list.am/h/947/80706947.webp',
                    price:'3,500,000 ֏ ամսական',
                    info_1:'Առևտրային տարածք Տիգրան Պետրոսյան',
                    info_2:'260 քմ'
                },
                {
                    id:1.5,
                    img:'https://s.list.am/h/950/76787950.webp',
                    price:'$2,500 ամսական',
                    info_1:'Շենք Սայաթ-Նովայի պողոտայում',
                    info_2:'178 քմ'
                },
                {
                    id:1.6,
                    img:'https://s.list.am/h/667/79027667.webp',
                    price:'5,000,000 ֏ ամսական',
                    info_1:'Շենք Արարատյան փողոցում',
                    info_2:'2178 քմ'
                },
            ]
        },
        {
            id:2,
            name:'Այլ նյութեր >',
            arr:[
                {
                    id:2.1,
                    img:'https://s.list.am/h/655/79487655.webp',
                    price:'2,850 ֏',
                    info_1:'Գունավոր մետաղների ընդունում',
                    info_2:''
                },
                {
                    id:2.2,
                    img:'https://s.list.am/h/438/80014438.webp',
                    price:'400 ֏',
                    info_1:'Շենք Արարատյան փողոցում',
                    info_2:'Ստվարաթուղթ, Կարտոն'
                },
                {
                    id:2.3,
                    img:'https://s.list.am/h/210/70805210.webp',
                    price:'3,000 ֏',
                    info_1:'Գրուզիկ 60g 19mm',
                    info_2:''
                },
                {
                    id:2.4,
                    img:'https://s.list.am/h/523/75810523.webp',
                    price:'100 ֏',
                    info_1:'Գինու խցաններ ռուսական',
                    info_2:''
                },
                {
                    id:2.5,
                    img:'https://s.list.am/h/965/63943965.webp',
                    price:'4,800 ֏',
                    info_1:'Կաշվի ներկեր ներկեր',
                    info_2:''
                },
                {
                    id:2.6,
                    img:'https://s.list.am/h/390/79724390.webp',
                    price:'5,000 ֏',
                    info_1:'Էպոքսիդային խեժ սմալա սմոլա',
                    info_2:''
                },
            ]
        },
        
    ]
    return (
        <div className="product-main">
            {productBassa.map((div)=>{
                return <ProductDiv key={div.id} name={div.name} arr={div.arr}/>
            })}
        </div>
    )
}
