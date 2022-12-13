import Nav from "./components/Nav";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import OrderSummary from "./components/OrderSummary";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={'top-container'}>
      <Nav />
      <div className='container content'>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/confirmation' element={<OrderSummary />} />
          <Route path='/product/:id' element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
