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

const Header: React.FC = (props) => {
  return (
    <IonHeader>
      <IonToolbar color="secondary">
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonItem routerLink='/' color='secondary' lines='none' detail={false} className='ion-text-center' routerDirection='back'>
          UCommerce
        </IonItem>
        <IonItem slot="end" routerLink="/user" color="secondary" lines="none" detail={false}>
          <IonIcon icon={person} />
        </IonItem>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
