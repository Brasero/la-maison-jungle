import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [cart, updateCart] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>

      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
