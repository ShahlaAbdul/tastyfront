import './App.css';
import MainLayout from './Layout/MainLayout';
import AddPage from './Pages/AddPage';
import Basket from './Pages/Basket';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/add" element={<AddPage></AddPage>}/>
      <Route path="/basket" element={<Basket></Basket>}/>
      <Route path="/detail/:id" element={<Detail></Detail>}/>
      <Route path="/wishlist" element={<Wishlist></Wishlist>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
