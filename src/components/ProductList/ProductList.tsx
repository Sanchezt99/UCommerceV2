import React, { useState } from "react";
import {
  IonLabel,
  IonImg,
  IonList,
  IonItem,
  IonAvatar,
  IonSearchbar,
} from "@ionic/react";

type Product = {
  src: string;
  name: string;
};

const products: Product[] = [
  {
    src: "/",
    name: "Chocolates",
  },
  {
    src: "/",
    name: "Chicles",
  },
  {
    src: "/",
    name: "Mecato",
  },
];

const ProductsList: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const searchbarManager = (e: CustomEvent) => {
    setSearchText(e.detail.value);
  };

  return (
    <React.Fragment>
      <IonSearchbar
        value={searchText}
        onIonChange={searchbarManager}
      ></IonSearchbar>
      <IonList className="ion-margin">
        {products.map((obj, i) => {
          if (obj.name.toLowerCase().indexOf(searchText.toLowerCase()) === 0) {
            return (
              <IonItem key={i} routerLink="/">
                <IonAvatar>
                  <IonImg src={obj.src} />
                </IonAvatar>
                <IonLabel>{obj.name}</IonLabel>
              </IonItem>
            );
          }
          return <React.Fragment></React.Fragment>
        })}
      </IonList>
    </React.Fragment>
  );
};

export default ProductsList;
