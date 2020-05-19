import React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonImg,
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
/* import "./User.css"; */
import "./User.css";

/* Components */

import Header from "../../components/Header/Header";
import { RouteComponentProps } from "react-router";
import { createOutline, addOutline } from "ionicons/icons";

const profile = {
  name: "Pablo Pineda",
  email: "pablo@mail.com",
  img:
    "https://lgfstatic.com/2015/conversions/virtudes-de-una-persona-large.jpg",
  phone: "3127734437",
  gender: "Masculino",
  birthDate: "15/01/1998",
};

const User: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <Header isUser={true} />
      <IonContent>
        <IonCard color="secondary">
          <IonImg src={profile.img} alt={profile.name} />

          <IonCardHeader>
            <IonItem color="secondary" lines="none">
              <IonCardSubtitle>Ing de sistemas</IonCardSubtitle>
            </IonItem>
            <IonItem color="secondary" lines="none">
              <IonCardTitle>{profile.name}</IonCardTitle>
              <IonButton fill="clear">
                <IonIcon icon={createOutline} className="bColor"></IonIcon>
              </IonButton>
            </IonItem>
          </IonCardHeader>

          <IonCardContent className="ion-text-center">
            <IonItem lines="none" color="secondary">
              <IonButton slot='start' color='tertiary'>
                <IonLabel>Servicio</IonLabel>
                <IonIcon icon={addOutline} className="bColor" slot="end"></IonIcon>
              </IonButton>
              <IonButton slot='end' color='tertiary'>
                <IonLabel>Producto</IonLabel>
                <IonIcon icon={addOutline} className="bColor" slot='end'></IonIcon>
              </IonButton>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
