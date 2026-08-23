import { Routes, Route } from "react-router-dom";
import Header from "./Navigetions/Header";
import { HeroPage, AboutPage, ContactPage } from "./components";
// import Users from "./DynamicRoutes/Users";
import Material from "./components/Material";
import MaterailDetails from "./components/MaterailDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route path="/user/:id" element={<Users />} /> */}
          <Route index element={<HeroPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product" element={<Material />} />
          <Route path="/product/:id" element={<MaterailDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
