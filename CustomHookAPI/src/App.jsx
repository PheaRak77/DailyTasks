import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
function App() {
  function NotFount() {
    return <h1>404 Page NotFound ?</h1>;
  }
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFount />} />
    </Routes>
  );
}

export default App;
