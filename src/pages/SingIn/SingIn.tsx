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
import "./SingIn.css";

import { RouteComponentProps } from "react-router";
import Header from "../../components/Header/Header";

const SingIn: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <Header isUser={false} />

      <IonContent>
        <IonCard>
          <IonItem className="data-information">
            <IonLabel position="floating" color="Primary">
              email
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem className="data-information">
            <IonInput
              type="password"
              color="dark"
              placeholder="Contraseña"
            ></IonInput>
            <IonInput></IonInput>
          </IonItem>
          <IonButton color="secondary" expand="full" className="confirm-button">
            Ingresar
          </IonButton>
          <IonInput></IonInput>
          <IonInput></IonInput>
          <IonButton expand="full" className="confirm-button">
            ¿Olvidaste tu contraseña?
          </IonButton>
          <IonInput></IonInput>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default SingIn;
