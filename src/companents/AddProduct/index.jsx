import { useRef } from "react"
import React from 'react'

export default function index({setDataBassa}) {
    
    const imgURL = useRef(null)
    const text = useRef(null)
    const p = useRef(null)
    const select = useRef(null)
    function addProd() {
        let imgURLValue = imgURL.current.value
        let textValue =  text.current.value
        let pValue = p.current.value
        let selectValue = select.current.value
    
        setDataBassa((products) => {
            return {
                ...products,
                productBassa: products.productBassa.map((el) => {
                    if (el.name === selectValue) {
                        
                        return {
                            ...el,
                            arr: [
                                ...el.arr,
                                {
                                    img: imgURLValue,
                                    price: pValue,
                                    info_1: textValue,
                                    info_2: '',
                                },
                            ],
                        };
                    }
                    imgURL.current.value = ''
                    text.current.value = ''
                    p.current.value = ''
                    return el;
                }),
            };
        });
    }
  return (
    <div className="addProduct">
        <h1>Ավելացնել ապրանք</h1>
        <div className="inputes">
            <input ref={imgURL} type="text" placeholder='Նկարի հասցեն' className="inputImg" />
            <input ref={text} type="text" placeholder='Ապրանքի մասին տեղեկություն' className="infoInput" />
            <input ref={p} type="text" placeholder='Ապրանքի արժեք' className="priceInput" />
            <form action="">
                <select ref={select} name="" id="" size={1}>
                    <option value="Շինարարական ծառայություններ >" className="option1">Շինարարական ծառայություններ </option>
                    <option value="Կոմերցիոն անշարժ գույքի և գրասենյակների վարձակալություն >" className="option2">Կոմերցիոն անշարժ գույքի և գրասենյակների վարձակալություն </option>
                    <option value="Այլ նյութեր >" className="option3">Այլ նյութեր</option>
                    <option value="Ավտոմեքենաներ >" className='option4'>Ավտոմեքենաներ</option>
                </select>
            </form>
        </div>
        <button onClick={addProd}>Ավելացնել</button>
    </div>
  )
}
