import React, { useState } from "react";
import { IonList, IonItem, IonAvatar, IonImg, IonLabel, IonSearchbar } from "@ionic/react";

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

const ServiceList: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const searchbarManager = (e: CustomEvent) => {
    setSearchText(e.detail.value);
  };
  return (
    <React.Fragment>
      <IonSearchbar value={searchText} onIonChange={searchbarManager}></IonSearchbar>
      <IonList className="ion-margin">
        {services.map((obj, i) => {
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

export default ServiceList;
