import React, { useState } from "react";
import {
  IonLabel,
  IonImg,
  IonList,
  IonItem,
  IonAvatar,
  IonSearchbar,
} from "@ionic/react";

type Service = {
  src: string;
  name: string;
};

const services: Service[] = [
  {
    src: "/",
    name: "Monitorias",
  },
  {
    src: "/",
    name: "Asesorias",
  },
  {
    src: "/",
    name: "Cursos",
  },
];

type Product = {
  src: string;
  name: string;
};

const products: Product[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chocolate.jpg",
    name: "Chocolates",
  },
  {
    src:
      "https://hosteleriaecuador.com/wp-content/uploads/mondelez-13-3-min.jpg",
    name: "Chicles",
  },
  {
    src:
      "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/159016-1000-1000/7702189001245.jpg?v=636106658587870000",
    name: "Mecato",
  },
];

const List: React.FC<{ typeList: "p" | "s" }> = (props) => {
  const [searchText, setSearchText] = useState("");

  const searchbarManager = (e: CustomEvent) => {
    setSearchText(e.detail.value);
  };

  const data = props.typeList === "p" ? products : services;

  return (
    <React.Fragment>
      <IonSearchbar
        value={searchText}
        onIonChange={searchbarManager}
      ></IonSearchbar>
      <IonItem
        className="ion-text-center"
        routerLink="/productsCategories"
        lines="none"
        detail={true}
        button={true}
      >
        <IonLabel>Categorías</IonLabel>
      </IonItem>
      <IonList className="ion-margin">
        {data.map((obj, i) => {
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
          return <React.Fragment key={i}></React.Fragment>;
        })}
      </IonList>
    </React.Fragment>
  );
};

export default List;
