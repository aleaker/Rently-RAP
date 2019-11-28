import { combineReducers } from "redux";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer
});

// export default combineReducers({
//     logged: userReducer,
//     products: productListReducer,
//     singleProductData: singleProductDataReducer,
//     categories: categoriesReducer,
//     cart: cartReducer,
//     users: usersReducer,
//     orders: ordersReducer
//   });
