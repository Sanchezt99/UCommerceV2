import React from "react";
import {
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonItem,
} from "@ionic/react";
import { person } from "ionicons/icons";

const Header: React.FC = (props) => {
  return (
    <IonHeader>
      <IonToolbar color="secondary">
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle className="ion-text-center">UCommerce</IonTitle>
        <IonItem slot="end" routerLink="/home/user" color='secondary' lines='none'>
          <IonIcon icon={person}/>
        </IonItem>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
