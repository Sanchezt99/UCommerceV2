import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
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
        <IonItem className='inputColor'>
          <IonLabel position="floating">email</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">contraseña</IonLabel>
          <IonInput type="password"></IonInput>
        </IonItem>
        <IonItem lines='none'>
          <IonButton slot='start'>
            Ingresar
          </IonButton>
          <IonButton slot='end'>
            Nueva cuenta
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default Login;
