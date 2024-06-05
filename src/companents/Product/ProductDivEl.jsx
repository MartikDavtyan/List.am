import React, { useState } from 'react';
import '../../companents-css/Product/productDivEl.css';

export default function ProductDivEl({ img, price, info_1, info_2, userImg, userName, text, info, finishInfo, time }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="product" onClick={openModal}>
        <img className='img' src={img} alt="Product"/>
        <div className="price">{price}</div>
        <div className="info">{info_1}</div>
        <div className="info2">{info_2}</div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
           <div className="m">
           <div className="modalStart">
              <img src={img} alt="" />
              <h2>{text}</h2>
              <p>{info}</p>
              <p> {finishInfo}</p>
              <p>{time}</p>
            </div>
            <div className="modalFinish">
              <img src={userImg} alt="" className="usrImg" /> 
              <h4 className="userName">{userName}</h4>
              <button className='wright'>Գրել</button>
              <button className='coll'>Զանգահարել</button>
            </div>
           </div>
          </div>
        </div>
      )}
    </>
  );
}
