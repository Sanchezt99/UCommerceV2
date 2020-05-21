import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import React from "react";
import "./Login.css";

import { RouteComponentProps } from "react-router";
import Header from "../../components/Header/Header";

const Login: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <Header isUser={true} />

      <IonContent>

        <IonImg className="centerLogo" src="https://i.imgur.com/Xc031vQs.png"></IonImg>

        <IonItem className="ion-text-center">
        <IonLabel>"Lo quieres, Lo buscas, Lo tienes"</IonLabel>
        </IonItem>
        <IonItem className="ion-margin" >
          <IonLabel position="floating">Ingresa tu email</IonLabel>
          <IonInput type='email'></IonInput>
        </IonItem>
        <IonItem className='ion-margin'>
          <IonLabel position="floating">Ingresa tu contraseña</IonLabel>
          <IonInput type="password"></IonInput>
        </IonItem>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" className="ion-margin">
                Ingresar
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" className="ion-margin" routerLink='/signup'>
                Nuevo usuario
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Login;
