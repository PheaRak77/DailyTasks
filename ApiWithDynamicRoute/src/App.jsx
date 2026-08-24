import { Routes, Route, Link } from "react-router-dom";
import Products from "./Pages/Products";
import ProductsDetail from "./Pages/ProductsDetail";

function NotFound() {
  return <center>404 NOt Found !</center>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to={"/products"}>Go To API</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />/
        <Route path="/products/:id" element={<ProductsDetail />} />/
        {/* <Route path="*" element={<NotFound />} />/ */}
      </Routes>
    </div>
  );
}

export default App;
