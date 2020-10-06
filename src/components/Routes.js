import React, { Suspense, lazy, useEffect } from "react";
import Header from "./header/Header";
import { Route } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { getProductStore , getTokenStore} from "../utility";
import { setProduct } from "../store/actions/ProductAction";
import { connect } from "react-redux";
import Login from "../pages/Login";
import { setAuthState } from "../store/actions";
const AddProduct = lazy(() => import("../pages/AddProduct"));
const ProductList = lazy(() => import("../pages/ProductList"));

function Routes({ setProduct, isAuthorised, setAuthState }) {
  useEffect(() => {
    // eslint-disable-next-line
    const token = getTokenStore();
    if(token){
        setAuthState(token)
        const items = getProductStore();
        if (items) {
          setProduct(items.products);
        }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Suspense
      fallback={
        <div>
          <CircularProgress />
        </div>
      }
    >
      <Header />(
      <div style={{ padding: "7em 8em" }}>
        {isAuthorised ? (
          <>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/add" component={AddProduct} />
          </>
        ) : (
          <Login />
        )}
      </div>
    </Suspense>
  );
}

const mapStateToProps = ({ auth }) => {
  return { ...auth };
};

export default connect(mapStateToProps, { setProduct, setAuthState })(Routes);
