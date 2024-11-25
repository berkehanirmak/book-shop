import { useState } from "react";
import { moneyFormat } from '../helpers'
import {FaStar} from 'react-icons/fa'
import FavoriButton from './FavoriButton';


function Product({ total, money, product, basket, setBasket }) {

const[rating,setRating]=useState(null);
const[hover,setHover]=useState(null);
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    //ürün daha önce eklendi
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);

    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );

    currentBasket.amount -= 1;

    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };
  return (
    <>
      <div className="product">
   
        <div className="row">
        <FavoriButton/>
          <div className="product-text">
            <h5><i className='bx bxs-truck'></i> Hızlı <br/>Teslimat</h5>

          </div>
            <div className="product-text2">
            <h4><i className='bx bxs-package'></i> Kargo <br/>Bedava</h4>

          </div>
          <div className="product-text3">
            <h4>-30%*</h4>

          </div>
        </div>

        <img src={product.image} alt=""/>
        <h4>{product.title}</h4>
        <div className="price"> ₺ {moneyFormat(product.price)}</div>

        <div className="actions">
          <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>
          <i className='bx bx-trash'></i>
                    </button>
          <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>
            Ekle{" "}
          </button>
        </div>
      

          {[...Array(5)].map((star,index)=>{
            const currentRating=index+1;
  return (   <label>
    <input 
    type="radio"
    name="rating"
    value={currentRating} 
    onClick={()=>setRating(currentRating)}
    ></input>
       <FaStar className="star" size={27}
       color={currentRating<=(hover||rating)? "#ffc107":"#e4e5e9"}
       onMouseEnter={()=>setHover(currentRating)}
       onMouseLeave={()=>setHover(null)}

       />
  </label>);    

          })}

          <br />
          
          <li className="bilgi"> <i className='bx bx-trending-down'> Son 30 Günün En Düşük Fiyatı!</i></li>
        
        
      </div>
    </>
  );
}
export default Product;
