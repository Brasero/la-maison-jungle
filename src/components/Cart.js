function Cart() {
       const item1 = 'Monstera'
       const item2 = 'Lierres'
       const prix1 = 8
       const prix2 = 10
    return (
        <div>
            <h2>Panier</h2>
            <ul>
                <li>{ item1 } : <small>{ prix1 }€</small></li>
                <li>{ item2 } : <small>{ prix2 }€</small></li>
            </ul>
            <div>
                Total : { prix1 + prix2 }€
            </div>
        </div>
    )
}

export default Cart 