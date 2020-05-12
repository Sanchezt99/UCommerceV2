import React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonAvatar,
  IonItem,
  IonImg,
  IonButton,
} from "@ionic/react";
/* import "./User.css"; */

/* Components */

import Header from "../../components/Header/Header";
import { RouteComponentProps } from "react-router";

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
          <IonGrid className="ion-text-center">
            <IonRow>
              <IonCol className="label">
                <IonLabel color="light">Mi perfil</IonLabel>
              </IonCol>
            </IonRow>

            <IonRow className='ion-justify-content-center'>
              <IonCol className='ion-justify-content-end'>
                <IonAvatar>
                  <IonImg src={profile.img} alt={profile.name} />
                </IonAvatar>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="data">
                Nombre: {profile.name}
              </IonCol>
            </IonRow>

            <IonRow>


              <IonCol className="data">Email: {profile.email}</IonCol>

            </IonRow>

            <IonRow>

              <IonCol className="data">Telefono: {profile.phone}</IonCol>

            </IonRow>

            <IonRow>

              <IonCol className="data">Género: {profile.gender}</IonCol>

            </IonRow>

            <IonRow>

              <IonCol className="data">
                Fecha de nacimiento: {profile.birthDate}
              </IonCol>

            </IonRow>

          </IonGrid>
          <IonButton routerLink="/Add" color="primary" expand="block">Agregar producto o servicio nuevo</IonButton>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default User;
