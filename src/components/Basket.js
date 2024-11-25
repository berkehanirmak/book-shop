import BasketItem from "./BasketItem";

function Basket({ basket, products, total, resetBasket }) {
  return (
    <div>
      <div className="basket-container">
        <li class="success">✔ Sepete eklendi</li>
        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>

        <div className="basket-total ">
          Ürünün Toplamı : {total.toFixed(2)} ₺{" "}
        </div>
        <button className="basket-reset-button " onClick={resetBasket}>
          Sepeti Sıfırla
        </button>
      </div>
    </div>
  );
}

export default Basket;
