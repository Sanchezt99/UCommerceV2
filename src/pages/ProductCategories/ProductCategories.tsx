import React from "react";
import {
  IonList,
  IonItem,
  IonContent,
  IonPage,
  IonCard,
} from "@ionic/react";

/* Components */

import Header from "../../components/Header/Header";

const availableProductsCategories = {
  data: [
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Frutas",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Bebidas",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Mecato",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Chicles",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Chocolates",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Bombones",
    },
  ],
};

const ProductCategories: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonCard className="center" color="secondary">
          <ProductCategoryList />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

const ProductCategoryList = () => {
  return (
    <IonList color="secondary">
      {availableProductsCategories.data.map((obj, i) => {
        return (
          <IonItem routerLink="/Products" key={obj.id} lines="none">
            {obj.name}
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default ProductCategories;
