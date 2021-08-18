import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Cart />
        <ShoppingList />
        <Footer />
      </header>
    </div>
  );
}

export default App;
