import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './state/CartContextProvider';
import ProductList from './components/ProductList';
import CartSideBar from './components/CartSidebar';

function App() {



  return (
    <div className="App p-3">
      <CartContextProvider>
        <div className='d-flex flex-row'>
          <div className='w-75'><ProductList></ProductList></div>
          <div className='w-25' style={{backgroundColor:"lightgray", height:"95vh"}}> <CartSideBar></CartSideBar></div>
        </div>
      </CartContextProvider>
    </div>
  );
}

export default App;
