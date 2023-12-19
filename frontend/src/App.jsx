import "./App.css";
import Basket from "./components/Products/Basket";
import ProductDetails from "./components/Products/ProductDetails";
import ProductPage from "./pages/ProductPage";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductPage/>}/>
        <Route path="/productDetails/:id" element={<ProductDetails/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
