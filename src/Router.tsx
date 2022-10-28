import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/layouts";
import { Checkout } from './pages/Checkout/index';


export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}