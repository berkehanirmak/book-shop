
function BasketItem({ item ,product}) {
    return (
      
      <li className="basket-item">
        
        <img src={product.image} alt=""/>
     {product.title} x {product.id} x {item.amount} adet.
     
      </li>
    
    );
  }
  export default BasketItem;