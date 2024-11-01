import './App.css';
import { Navbar } from './components/nav';
import { ProductCatalog } from './pages/product';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ProductCatalog />
    </div>
  );
}

export default App;
