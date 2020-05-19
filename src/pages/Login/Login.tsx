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
        <IonItem className="ion-margin" >
          <IonLabel position="floating">email</IonLabel>
          <IonInput type='email'></IonInput>
        </IonItem>
        <IonItem className='ion-margin'>
          <IonLabel position="floating">contraseña</IonLabel>
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
                Nueva cuenta
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Login;
