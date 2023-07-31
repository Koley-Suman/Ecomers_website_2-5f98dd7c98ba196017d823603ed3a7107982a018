import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import HomePage from "./routes/homePage/homePage";
import ShopPage from "./routes/shopPage/shopPage";
import Authentiaction from "./routes/authentication/authentiaction";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import {
  createUserFromAuth,
  onAuthStateChanged_Listener,
} from "./utilitis/firebase/firebase";
import { useDispatch } from "react-redux";
import { SetCurrentUser } from "./store/user/user-reducer";
import { useEffect } from "react";
import CheckoutPage from "./routes/checkoutPage/checkoutPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged_Listener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      dispatch(SetCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="auth/*" element={<Authentiaction />} />
          <Route path="checkout" element={<CheckoutPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
