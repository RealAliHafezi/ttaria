// libraries
import { Route, Routes } from "react-router-dom";
// components
import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Favorite from "./pages/Favorite/Favorite";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:ProductId" element={<Product />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}
export default App;
