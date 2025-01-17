import Header from './components/Header';
import { useState,useEffect } from 'react';
import Product from './components/Product'
import products from './products.json'
import Basket from './components/Basket'
import './index.css';
import Footer from './components/Footer'

function App(){
const [money,setMoney]=useState(10500)
const [basket,setBasket]=useState([])
const [total,setTotal]=useState(0)

const resetBasket=()=>{
setBasket([])
}
useEffect( ()=>{

    setTotal(
        basket.reduce((acc,item)=>{
            return acc + (item.amount*(products.find(product=>product.id===item.id).price))
               },0),
    )
},[basket]
)
    return(
        <>
        <Header total={total} money={money}/>
       
     <div className="container products">
     {products.map(product=>(
            <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket}  product={product}/>
        ))}
     </div>
        {total>0 &&(
                    <Basket resetBasket={resetBasket} products={products} basket={basket} total={total}/>
        )}        

       <Footer/>
        </>
    );
}
export default App;