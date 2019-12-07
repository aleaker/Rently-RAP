import { combineReducers } from "redux";
import userReducer from "./userReducer";
import carRentalReducer from "./carRentalReducer";
import companyReducer from "./companyReducer";
import adminEmpresaReducer from "./adminEmpresaReducer";

export default combineReducers({
  user: userReducer,
  carRental: carRentalReducer,
  company: companyReducer,
  commission: adminEmpresaReducer
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
