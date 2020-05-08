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
  id: string;
  src: string;
  name: string;
};

const products: Product[] = [
  {
    id: "",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chocolate.jpg",
    name: "Chocolates",
  },
  {
    id: "",
    src: "https://hosteleriaecuador.com/wp-content/uploads/mondelez-13-3-min.jpg",
    name: "Chicles",
  },
  {
    id: "",
    src: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/159016-1000-1000/7702189001245.jpg?v=636106658587870000",
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
              <IonItem key={i} routerLink='/'>
                <IonAvatar>
                  <IonImg src={obj.src} />
                </IonAvatar>
                <IonLabel>{obj.name}</IonLabel>
              </IonItem>
            );
          }
          return <React.Fragment></React.Fragment>;
        })}
      </IonList>
    </React.Fragment>
  );
};

export default ProductsList;
