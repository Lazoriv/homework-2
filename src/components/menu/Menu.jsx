import './Menu.css';
import pizzas from "./data";

const Menu = () => {
    return (
        <div className="menu-container">
            {pizzas.map((pizza) => (
                <div className="pizza-item" key={pizza.id}>
                    <img src={pizza.imageUrl} alt={`${pizza.name} pizza`} className="pizza-image" />
                    <div className="pizza-info">
                        <h2>{pizza.name}</h2>
                        <p className="ingredients">{pizza.ingredients.join(", ")}</p>
                        <p className="price">€{pizza.unitPrice}</p>
                    </div>
                    <button className={pizza.soldOut ? "sold-out" : "add-to-cart"} disabled={pizza.soldOut && "disabled"}>
                        {pizza.soldOut ? "SOLD OUT" : "ADD TO CART"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Menu;