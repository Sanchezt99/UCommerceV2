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

const availableProducts = {
  data: [
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Mango biche",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Gomitas",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Burbujas jet",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Chicles",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Chepe patatas",
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      name: "Bombones",
    },
  ],
};

const Products: React.FC = () => {
  return (
    <IonPage>
      <Header isUser={false}/>
      <IonContent>
        <IonCard className="center" color="secondary">
          <ProductList />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

const ProductList = () => {
  return (
    <IonList color="secondary">
      {availableProducts.data.map((obj, i) => {
        return <IonItem key={obj.id} routerLink='/seller' lines='none'>{obj.name}</IonItem>;
      })}
    </IonList>
  );
};

export default Products;
