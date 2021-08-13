import './App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Cart />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
