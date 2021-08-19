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
      </header>

      <body className="App-body">
        <Cart />
        <ShoppingList />
      </body>
      
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
