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
  IonIcon,
  IonItem,
  IonImg,
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
        <IonCard className="ion-align-items-center" color="secondary">
          <IonGrid className="ion-text-center">
            <IonRow>
              <IonCol className="label">
                <IonLabel color="light">Mi perfil</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem className='ion-align-items-center'>
                  <IonAvatar className='ion-margin'>
                    <IonImg src={profile.img} alt={profile.name} />
                  </IonAvatar>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol className="data">Nombre: {profile.name}</IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol className="data">Email: {profile.email}</IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol className="data">Telefono: {profile.phone}</IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol className="data">Género: {profile.gender}</IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol className="data">
                    Fecha de nacimiento: {profile.birthDate}
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
