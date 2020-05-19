import React from "react";
import {
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
} from "@ionic/react";
import { person } from "ionicons/icons";

const Header: React.FC<{ isUser: boolean }> = (props) => {
  return (
    <IonHeader>
      <IonToolbar color="secondary">
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonItem
          routerLink="/home"
          color="secondary"
          lines="none"
          detail={false}
          className="ion-text-center"
          routerDirection="back">
          Ucommerce
        </IonItem>
        {props.isUser ? undefined:(
          <IonItem
            slot="end"
            className="ion-text-center ion-margin-end"
            routerLink="/user"
            color="secondary"
            lines="none"
            detail={false}
          >
            <IonIcon icon={person}></IonIcon>
          </IonItem>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
