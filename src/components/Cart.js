import '../styles/Cart.css'

function Cart() {
       const item1 = 'Monstera'
       const item2 = 'Lierres'
       const item3 = "bouquet de fleurs"
       const prix1 = 8
       const prix2 = 10
       const prix3 = 15
    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>{ item1 } : <small>{ prix1 }€</small></li>
                <li>{ item2 } : <small>{ prix2 }€</small></li>
                <li>{ item3 } : <small>{ prix3 }€</small></li>
            </ul>
            <div>
                Total : { prix1 + prix2 + prix3 }€
            </div>
        </div>
    )
}

export default Cart 