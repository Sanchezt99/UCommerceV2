import React from "react";
import {
  IonIcon,
  IonHeader,
  IonButton,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
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
        <IonButton
            className="user"
            color="tertiary"
            routerLink="/User"
            fill="clear"
            slot='end'
          >
            <IonIcon icon={person} />
          </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
