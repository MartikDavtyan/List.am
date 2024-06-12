import React, { useState } from 'react'
import './companents-css/Story/story.css'
import './companents-css/Cotalog/cotalog.css'
import './companents-css/Product/product.css'

import Header from './companents/Header'
import CatalogEl from './companents/Cotalog/CatalogEl'
import StoryEl from './companents/Story/StoryEl'
import ProductDiv from './companents/Product/ProductDiv'
import Footer from './companents/Footer'
export default function Projectmain() {
    let br = <br />
    const [dataBassa , setDataBassa] = useState({
      productBassa: [
        {
          id:0,
          name : 'Շինարարական ծառայություններ >',
          arr: [
            {
              img:'https://s.list.am/h/132/80819132.webp',
              price:'',
              info_1:'Կատարում եմ ցանկացած',
              info_2:'',
              userImg:'https://avatar.list.am/p/1056789.webp',
              userName:'V Progress',
              text:'Կատարում ենք մետաղական կոնստրուկցիաների (angar, pahest ангар boxer avtotexspasarkum) պատրաստում, կառուցում ',
              info:`Կատարում ենք ցանկացած չափի, տեսակի մետաղական կոնստրուկցիաների, անգարների, (angar) սենդվիչ պանելներով կառուցապատում, անգարներ, սառնարաններ, տնակներ (domik, vagonchik)  ${br} 
              Մետաղական կոնստրուկցիաներ նավեսների պատրաստում, կառուցում շատ արագ և մատչելի: ${br}
              Պահեստ ${br}
              Անգար ${br}
              Մետաղական կոնստրուկցիաներ ${br}
              Կոմերցիոն տարածքներ պահեստներ, սառնարաններ
  Անասնաֆերմաներ  ${br}
  
              `,
              finishInfo:'Խստիվ արգելվում է կրկնօրինակել էջը, Խնդրում ենք չնմանակել մեր տեքստը և չտեղադրել այլ հայտարարություններում։',
              time:'Հայտարարության համարը 20049374           Տեղադրված է 27.09.2023            Թարմացվել է 04.06.2024 12:16',
            },
            {
              img:'https://s.list.am/h/124/80228124.webp',
              price:'',
              info_1:'Ասֆալտապատում երաշխիքո',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/067/80231067.webp',
              price:'',
              info_1:'Ասֆալտ, ասֆալտապատում, ասֆալտի կրոշկա',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/467/80582467.webp',
              price:'',
              info_1:'Քանդման աշխատանքներ, Պատերի քանդում',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/675/80281675.webp',
              price:'',
              info_1:'Սվարկա, սվարչիկ, կատարում ենք',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/241/65547241.webp',
              price:'',
              info_1:'Ջերմամեկուսացումը փքվող',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/573/75478573.webp',
              price:'',
              info_1:'Կատարում ենք մետաղական կոնստրուկցի',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/156/80705156.webp',
              price:'',
              info_1:'Բրուշատկա (տոմեթ, պլիտկա) բարդուր, արտադրություն',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/450/57897450.webp',
              price:'',
              info_1:'Ջերմամեկուսացում теплоизоляция, պենա, полиуретан,',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/317/75628317.webp',
              price:'',
              info_1:'Bobcat Բոբկատ շինարարական աշխատանքնե',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/809/80754809.webp',
              price:'',
              info_1:'Պատերի ծակում ցանկացած չափի',
              info_2:'',
            },
            {
              img:'https://s.list.am/h/609/80860609.webp',
              price:'',
              info_1:'Բետոնե Դեկորատիվ սալիկ, Բրուշատկա',
              info_2:'',
            },
          ]
        },
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
          {
              id:3,
              name:'Ավտոմեքենաներ >',
              arr:[
                  {
                      id:3.1,
                      img:'https://s.list.am/h/925/78857925.webp',
                      price:'$34,000',
                      info_1:'Tesla Model Y, էլեկտրական',
                      info_2:'2020 թ., 31,714 կմ, էլեկտրական'
                  },
                  {
                      id:3.2,
                      img:'https://s.list.am/h/638/80421638.webp',
                      price:'$17,000',
                      info_1:'BMW X5, 4.8 լ, լիաքարշ, 2009 թ., գազ',
                      info_2:'2009 թ., 230,000 կմ, Բենզին'
                  },
                  {
                      id:3.3,
                      img:'https://s.list.am/h/890/80684890.webp',
                      price:'$85,000',
                      info_1:'Porsche Cayenne, 3.0 լ, լիաքարշ, 2019 թ.',
                      info_2:'2019 թ., 45,000 մղոն, Բենզին'
                  },
                  {
                      id:3.4,
                      img:'https://s.list.am/h/111/80462111.webp',
                      price:'$25,500',
                      info_1:'Honda e:NS1, էլեկտրական, 2023 թ',
                      info_2:'2023 թ., 70 կմ, էլեկտրական'
                  },
                  {
                      id:3.5,
                      img:'https://s.list.am/h/046/80016046.webp',
                      price:'$13,000',
                      info_1:'Toyota Camry, 2.5 լ, 2012 թ.',
                      info_2:'2012 թ., 88,000 մղոն, Բենզին'
                  },
                  {
                      id:3.6,
                      img:'https://s.list.am/h/870/80239870.webp',
                      price:'850,000 ֏',
                      info_1:'Opel Astra հետչբեք, 1.8 լ, 1992 թ., գազ',
                      info_2:'1992 թ., 320,000 կմ, Բենզին'
                  },
                  {
                      id:3.7,
                      img:'https://s.list.am/h/057/80735057.webp',
                      price:'$14,700',
                      info_1:'Jeep Compass, 2.4 լ, լիաքարշ',
                      info_2:'2018 թ., 65,000 կմ, Բենզին'
                  },
                  {
                      id:3.8,
                      img:'https://s.list.am/h/515/79546515.webp',
                      price:'$42,000',
                      info_1:'Toyota Venza, 2.5 լ, հիբրիդ',
                      info_2:'2021 թ., 43,000 կմ, Հիբրիդ'
                  },
                  {
                      id:3.9,
                      img:'https://s.list.am/h/039/80657039.webp',
                      price:'$20,500',
                      info_1:'Honda Accord, 1.5 լ, 2020 թ.',
                      info_2:'2020 թ., 39,000 մղոն, Բենզին'
                  },
                  {
                      id:3.10,
                      img:'https://s.list.am/h/409/80724409.webp',
                      price:'$38,000',
                      info_1:'Toyota Land Cruiser Prado, 4.0 լ',
                      info_2:'2011 թ., 174,000 կմ, Բենզին'
                  },
                  {
                      id:3.11,
                      img:'https://s.list.am/h/412/79853412.webp',
                      price:'$6,000',
                      info_1:'Mazda 6, 2.5 լ, 2017 թ.',
                      info_2:'2017 թ., 63,000 կմ, Բենզին'
                    },
                    {
                      id:3.12,
                      img:'https://s.list.am/h/760/80194760.webp',
                      price:'$14,700',
                      info_1:'Toyota Corolla, 2.0 լ, 2020 թ',
                      info_2:'2020 թ., 18,000 մղոն, Բենզին'
                  },
                  {
                      id:3.13,
                      img:'https://s.list.am/h/330/76873330.webp',
                      price:'$20,500',
                      info_1:'Mercedes-Benz S-Class, 5.0 լ, լիաքարշ, 2012 թ.',
                      info_2:'2012 թ., 212,000 կմ, Բենզին'
                  },
                  {
                      id:3.14,
                      img:'https://s.list.am/h/112/80738112.webp',
                      price:'$33,700',
                      info_1:'Toyota RAV4, 2.5 լ, լիաքարշ, 2021 թ.',
                      info_2:'2021 թ., 60,000 կմ, Բենզին'
                  },
                  {
                      id:3.15,
                      img:'https://s.list.am/h/842/80312842.webp',
                      price:'$17,400',
                      info_1:'Toyota Camry, 2.5 լ, հիբրիդ, 2017 թ.',
                      info_2:'2017 թ., 124,000 կմ, Հիբրիդ'
                  },
                  {
                      id:3.16,
                      img:'https://s.list.am/h/709/79424709.webp',
                      price:'$15,000',
                      info_1:'Nissan Rogue, 2.0 լ, լիաքարշ, 2018 թ.',
                      info_2:'2018 թ., 50,000 մղոն, Բենզին'
                  },
                  {
                    id:3.17,
                      img:'https://s.list.am/h/235/78447235.webp',
                      price:'€57,500',
                      info_1:'BMW iX, էլեկտրական, լիաքարշ, 2022 թ',
                      info_2:'2022 թ., 10,000 կմ, էլեկտրական'
                  },
                  {
                      id:3.18,
                      img:'https://s.list.am/h/960/80459960.webp',
                      price:'$6,300',
                      info_1:'Honda Fit հետչբեք, 1.3 լ, 2008 թ',
                      info_2:'2008 թ., 103,000 կմ, Բենզին'
                    },
                  ]
                },
      ],
      cotalogBassa:[
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
      ],
      storyBassa : [
        {
            key: 1,
            bc: '#009dcf',
            c: '#fff',
            img: 'url(https://sa.list.am/220.png)',
            text: 'Օրավարձով բնակարաններ',
        },
        {
            key: 2,
            bc: '#CDE6CC',
            c: '#ffffff',
            img: 'url(https://sa.list.am/328.png)',
            text: 'Նոթբուքի պայուսակներ',
        },
        {
            key: 3,
            bc: '#93BBEE',
            c: '#ffffff',
            img: 'url(https://sa.list.am/220.png)', // Update with actual image URL
            text: 'Արտադրված է Հայաստանում',
        },
        {
            key: 4,
            bc: '#D6C3E8',
            c: '#000',
            img: 'url(https://sa.list.am/328.png)', // Update with actual image URL
            text: 'Խթանեք Ձեր բիզնեսը',
        },
        {
            key: 5,
            bc: '#FAE56E',
            c: '#000',
            img: 'url(https://sa.list.am/329.png)', // Update with actual image URL
            text: 'Սեղանի խաղեր',
        },
        {
            key: 6,
            bc: '#D9D7CE',
            c: '#000',
            img: 'url(https://sa.list.am/311.png)', // Update with actual image URL
            text: 'Տղամարդկանց կոշիկներ',
        },
        {
            key: 7,
            bc: '#e57d15',
            c: '#fff',
            img: 'url(https://sa.list.am/221.png)', // Update with actual image URL
            text: 'List.am-ում անվտանգություն',
        },
        {
            key: 8,
            bc: '#006aff',
            c: '#ffffff',
            img: 'url(https://sa.list.am/215.png)', // Update with actual image URL
            text: 'Էլեկտրական մեքենաներ',
        }
    ],
    })
    function addProd() {
      let imgURL = document.querySelector('.inputImg').value; // Get the value of the image URL input
      let text = document.querySelector('.infoInput').value; // Get the value of the text input
      let p = document.querySelector('.priceInput').value; // Get the value of the price input
      let select = document.querySelector('select').value; // Get the selected value
  
      setDataBassa((prevDataBassa) => {
          return {
              ...prevDataBassa,
              productBassa: prevDataBassa.productBassa.map((el) => {
                  if (el.name === select) {
                      
                      return {
                          ...el,
                          arr: [
                              ...el.arr,
                              {
                                  img: imgURL,
                                  price: p,
                                  info_1: text,
                                  info_2: '',
                              },
                          ],
                      };
                  }
                  document.querySelector('.inputImg').value = ''
                  document.querySelector('.infoInput').value = ''
                  document.querySelector('.priceInput').value = ''
                  return el;
              }),
          };
      });
  }
  
  return (
    <>
      <Header />
      <div className="main">
        <div className="cotalog">
            {dataBassa.cotalogBassa.map((el) => (
                <CatalogEl key={el.id} img={el.img} text={el.text} />
            ))}
        </div>
        <div className="c">
            {dataBassa.storyBassa.map((el) => (
                <StoryEl key={el.key} bc={el.bc} c={el.c} img={el.img} text={el.text} />
            ))}
        </div>
        <div className="addProduct">
            <h1>Ավելացնել ապրանք</h1>
            <div className="inputes">
                <input type="text" placeholder='Նկարի հասցեն' className="inputImg" />
                <input type="text" placeholder='Ապրանքի մասին տեղեկություն' className="infoInput" />
                <input type="text" placeholder='Ապրանքի արժեք' className="priceInput" />
                <form action="">
                  <select name="" id="" size={1}>
                    <option value="Շինարարական ծառայություններ >" className="option1">Շինարարական ծառայություններ ></option>
                    <option value="Կոմերցիոն անշարժ գույքի և գրասենյակների վարձակալություն >" className="option2">Կոմերցիոն անշարժ գույքի և գրասենյակների վարձակալություն ></option>
                    <option value="Այլ նյութեր >" className="option3">Այլ նյութեր ></option>
                    <option value="Ավտոմեքենաներ >" className='option4'>Ավտոմեքենաներ ></option>
                  </select>
                </form>
            </div>
            <button onClick={addProd}>Ավելացնել</button>
        </div>
        <div className="product-main">
            {dataBassa.productBassa.map((div)=>{
                return <ProductDiv key={div.id} name={div.name} arr={div.arr}/>
            })}
        </div>
      </div>
      <Footer />
    </>
  )
}
