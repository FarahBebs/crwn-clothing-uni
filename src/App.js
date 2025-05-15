import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentecation from "./routes/authentication/authentecation.component";
import Shop from "./routes/shop/shop.component";

import Checkout from "./routes/checkout/checkout.component";
import USER_ACTION_TYPES from "./store/user/user.types";
import { signOutStart } from "./store/user/user.action";
import AddEditProductForm from "./routes/add-edit-product-form/add-edit-product-form.component";

const App = () => {
  const dispatch = useDispatch();
  const { tokens, shouldNavigateHome } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokens?.token) {
      dispatch({ type: USER_ACTION_TYPES.CHECK_USER_SESSION });
    } else {
      dispatch(signOutStart());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens?.token]);

  useEffect(() => {
    if (shouldNavigateHome) {
      navigate("/");
      dispatch({
        type: USER_ACTION_TYPES.SET_SHOULD_NAVIGATE_HOME,
        payload: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldNavigateHome]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="product/add" element={<AddEditProductForm />} />
          <Route
            path="product/:productId/edit"
            element={<AddEditProductForm />}
          />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentecation />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
