import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Detail from "./Pages/Detail";
import Order from "./Pages/Order";
import ConfirmOrder from "./Pages/ConfirmOrder";
import ItemRegister from "./Pages/ItemRegister";
import ItemSelfRegister from "./Pages/ItemSelfRegister";
import ItemVideoRegister from "./Pages/ItemVideoRegister";
import ItemVideoRegister2 from "./Pages/ItemVideoRegister2";
import First from "./Pages/First";
import Mypage from "./Pages/Mypage";
import GuideSlider from "./Components/GuideSlider";

import Favo from "./Pages/Favo";
import DeliverList from "./Pages/DeliverList";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/itemregister" element={<ItemRegister />} />

        <Route path="/detail" element={<Detail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />

        <Route path="/itemselfregister" element={<ItemSelfRegister />} />
        <Route path="/itemvideoregister" element={<ItemVideoRegister />} />
        
        <Route path="/favo" element={<Favo />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/deliver" element={<DeliverList />} />
        <Route path="/mypage" element={<Mypage />} />
        
        <Route path="/guide" element={<GuideSlider />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
