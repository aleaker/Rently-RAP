import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { fetchUser } from "./store/actions/user";
import { connect } from "react-redux";
import SingleProductContainer from "./SingleProduct/singleProduct.container";
import ProductListContainer from "./productList/productList.container";
import CartContainer from "./cart/cart.container";
import NavBar from "./navbar/navbar.container";
import "../../back/public/style.css";
import Sidebar from "./sidebar/sidebar.container";
import { fetchProductList } from "./store/actions/productList";
import confirmarCompra from "./confirmarCompra/confirmarCompra.container";
import { fetchCart, fetchCartFromLocalStorage } from "./store/actions/cart";
import NewProductContainer from "./newproduct/newProduct.container";
import EditProductContainer from "./editProduct/EditProducts.container";
import editCategoryContainer from "./editcategory/editCategory.container";
import Users from "./users/users.container";
import History from "./historial/historial.container";
import Orders from "./orders/orders.container";
import Order from "./singleorder/singleOrder.container";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser().then(() => {
      if (this.props.user.username) {
        this.props.fetchCart();
      } else {
        this.props.fetchCartFromLocalStorage();
      }
    });
    this.props.fetchProductList();
  }

  render() {
    return (
      <div>
        <NavBar user={this.props.user} history={this.props.history} />
        <Sidebar history={this.props.history} />
        <Switch>
          <Route
            exact
            path={"/product/:productID"}
            component={SingleProductContainer}
          />
          <Route
            exact
            path="/"
            render={() => <ProductListContainer history={this.props.history} />}
          />
          <Route
            path="/editproduct/:productID"
            render={({ match }) => (
              <EditProductContainer
                match={match}
                history={this.props.history}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => <CartContainer history={this.props.history} />}
          />
          <Route exact path={"/newproduct"} component={NewProductContainer} />
          <Route
            exact
            path={"/editcategory"}
            component={editCategoryContainer}
          />
          <Route
            exact
            path={"/cart/confirmar-compra"}
            component={confirmarCompra}
          />
          <Route exact path={"/users"} component={Users} />
          <Route exact path={"/history"} component={History} />
          <Route exact path={"/orders"} component={Orders} />
          <Route exact path={"/order/:orderId"} component={Order} />

          <Redirect from="/" to="/products" />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.logged.user,
  product: state.product
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  logOutUser: () => dispatch(logOutUser()),
  fetchProductList: () => dispatch(fetchProductList()),
  fetchCart: () => dispatch(fetchCart()),
  fetchCartFromLocalStorage: () => dispatch(fetchCartFromLocalStorage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
