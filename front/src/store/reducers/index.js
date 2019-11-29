import { combineReducers } from "redux";
import userReducer from "./userReducer";
import carRentalReducer from "./carRentalReducer"

export default combineReducers({
  user: userReducer,
  carRental: carRentalReducer
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
