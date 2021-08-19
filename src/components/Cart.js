import '../styles/Cart.css'
import { useState } from 'react'

function Cart() {
       const item1 = 'Monstera'
       const prix1 = 8

       const [cart, updateCart] = useState(0)
       const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="lmj-cart">
            <button onClick={() => setIsOpen(false)} className="lmj-cart-close-btn">
                Fermer
            </button>
            <h2>Panier</h2>
            <div>
                { cart } { item1 } : { prix1 }€
                <br />
                <button onClick={() => updateCart(cart + 1)} className="lmj-cart-fill-btn">
                    +
                </button>
                <button onClick={() => updateCart(cart > 0 && cart - 1)} className="lmj-cart-outline-btn">
                    -
                </button>
            </div>
            <div>
                <h3>Total : { prix1 * cart }€</h3>
                <button onClick={() => updateCart(0)} className="lmj-cart-outline-btn">
                    Vider le panier
                </button>
            </div>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)} className="lmj-cart-open-btn">
            Panier
        </button>
    )
}

export default Cart 