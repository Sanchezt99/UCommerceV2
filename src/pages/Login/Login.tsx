import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonCard,
  IonInput,
} from "@ionic/react";
import React from "react";
import "./Login.css";

import { RouteComponentProps } from "react-router";
import Header from "../../components/Header/Header";

const Login: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <Header isUser={false} />

      <IonContent>
        <IonCard>
          <IonItem className="data-seller">
            <IonLabel position="floating" color="Primary">
              Nombre
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem className="data-seller">
            <IonLabel position="floating" color="Primary">
              Apellido
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem className="data-seller">
            <IonLabel position="floating" color="Primary">
              celular
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem className="data-seller">
            <IonLabel position="floating" color="Primary">
              email
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem className="data-seller">
            <IonLabel position="floating" color="Primary">
              universidad
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonButton color="success" expand="full" className="create-button">
            Crear cuenta
          </IonButton>
          <IonInput></IonInput>
          <IonInput></IonInput>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Login;
