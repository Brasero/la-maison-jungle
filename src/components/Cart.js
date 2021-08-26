import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
       
       const [isOpen, setIsOpen] = useState(false)
       const total = cart.reduce(
           (acc, plant) => acc + plant.amount * plant.price,
           0
       )


       useEffect(() => {
           document.title = `LMJ: ${ total }€ d'achats`
       }, [ total ])
       
        
       function increaseItem(name) {
            const searchItem = cart.find((plant) => plant.name === name)

            const filteredCart = cart.filter(
                (plant) => plant.name !== name
            )

            updateCart([
                ...filteredCart,
                {name: searchItem.name, price: searchItem.price, amount: searchItem.amount + 1 }
            ])
            
       }

       function decreaseItem(name) {

            const searchItem = cart.find((plant) => plant.name === name)

            if(searchItem.amount > 1) {
                const filteredCart = cart.filter((plant) => plant.name !== name)

                updateCart([
                    ...filteredCart,
                    {name: searchItem.name, price: searchItem.price, amount: searchItem.amount - 1 }
                ])
            }
            else {
                const newCart = cart.filter((plant) => plant.name !== name)

                updateCart([...newCart])
            }

       }

       function trashItem(name) {
           const newCart = cart.filter((plant) => plant.name !== name)

           updateCart([...newCart])
       }

       useEffect(() => {
        document.title = `LMJ: ${ total }€ d'achats`
       }, [total])


    return isOpen ? (
        <div className="lmj-cart">
            <button 
                onClick={() => setIsOpen(false)} 
                className="lmj-cart-close-btn"
            >
                x
            </button>
            <h2>Panier</h2>
            <div>

                {total !== 0 ? (cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`}>
                        <div className="lmj-cart-item">
                            {name}, {price}€ x {amount} 
                            <button 
                                className="lmj-cart-trash-btn"
                                onClick={() => trashItem(name)}>
                                    Supprimer
                            </button>
                        </div>
                        <div>
                            <button 
                                className="lmj-cart-fill-btn" 
                                onClick={() => increaseItem(name)}
                            >
                                +
                            </button>
                            <button 
                                className='lmj-cart-outline-btn'
                                onClick={() => decreaseItem(name)}
                            >
                                -
                            </button>
                        </div>
                    </div>
                )))
                : (
                    <div className="lmj-cart-empty">
                        Panier vide
                    </div>
                )}
            

            </div>
            <h3>Total : {total}€</h3>
            {total !== 0 &&
                <div>
                    <button onClick={() => updateCart([])} className="lmj-cart-outline-btn">
                        Vider le panier
                    </button>
                </div>
            }
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)} className="lmj-cart-open-btn">
            Panier
        </button>
    )
}

export default Cart 