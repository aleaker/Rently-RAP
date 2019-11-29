import { combineReducers } from "redux";
import userReducer from "./userReducer";
import companyReducer from "./companyReducer";

export default combineReducers({
  user: userReducer,
  company: companyReducer
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
