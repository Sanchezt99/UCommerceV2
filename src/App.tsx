import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* app pages */
import Home from "./pages/Home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import User from "./pages/User/User";
import Seller from "./pages/Seller/Seller";
import ProductCategories from "./pages/ProductCategories/ProductCategories"
import Products from "./pages/Products/Products"
import Add from "./pages/Add/Add"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      <Route path="/login" component={Login} exact />
      <Redirect exact from="/" to="/login"></Redirect>
        <Route path="/home" component={Home} exact />
        <Route path="/user" component={User} exact />
        <Route path="/seller" component={Seller} exact />
        <Route path="/productsCategories" component={ProductCategories} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/add" component={Add} exact />
        <Route path="/signUp" component={SignUp} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
