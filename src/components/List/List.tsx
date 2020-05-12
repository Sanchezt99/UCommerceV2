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
    src: "https://scontent.fclo9-1.fna.fbcdn.net/v/t1.0-9/11061309_683079711803302_8282033642749883088_n.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_eui2=AeGmXwHFWgn0qopLICHy31zPIwlnhIQhx6UjCWeEhCHHpSjICSgH0CP7HE6KaJF6DXg9HuSSRGTEU9r4eTF0AIYC&_nc_ohc=IUPi0971WeEAX81UFLH&_nc_ht=scontent.fclo9-1.fna&oh=a108de1a6708a06155078854298abfaf&oe=5EE121C2",
    name: "Monitorias",
  },
  {
    src: "https://image.shutterstock.com/image-vector/vector-line-banner-concept-consulting-600w-797142808.jpg",
    name: "Asesorias",
  },
  {
    src: "https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=DAfpY3dUBRSM$j3xC8F_Lc$daE2N3K4ZzOUsqbU5sYt7OXw0$c4ANts28R8SQFyF6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
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
