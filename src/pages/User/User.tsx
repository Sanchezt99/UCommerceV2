import React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonLabel,
  IonAvatar,
  IonImg,
  IonButton,
  IonItemDivider,
  IonList,
  IonItem,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
} from "@ionic/react";
/* import "./User.css"; */
import "./User.css";

/* Components */

import Header from "../../components/Header/Header";
import { RouteComponentProps } from "react-router";
import { callOutline, star, createOutline } from "ionicons/icons";

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
            <IonCardSubtitle>Ing de sistemas</IonCardSubtitle>
            <IonCardTitle>{profile.name}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent className='ion-text-center'>
            
            <IonButton  fill="clear">
              <IonIcon icon={callOutline}></IonIcon>
            </IonButton>
            <IonButton  fill="clear">
              <IonIcon icon={callOutline}></IonIcon>
            </IonButton>
            <IonButton  fill="clear">
              <IonIcon icon={callOutline}></IonIcon>
            </IonButton>

            {/* <IonList color="secondary">
              <IonItem className="ion-margin" color="secondary">
                <IonLabel>Género: {profile.gender}</IonLabel>
              </IonItem>
              <IonItem className="ion-margin" color="secondary">
                <IonLabel>Fecha de nacimiento: {profile.birthDate}</IonLabel>
              </IonItem>
            </IonList>
            
            <IonButton routerLink="/Add" color="primary" expand="block">
              Agregar producto o servicio nuevo
            </IonButton> */}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
