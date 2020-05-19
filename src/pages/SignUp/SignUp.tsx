import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonCard,
  IonInput,
} from "@ionic/react";
import React, { useState } from "react";
import "./SignUp.css";

import { RouteComponentProps } from "react-router";
import Header from "../../components/Header/Header";

const SignUp: React.FC<RouteComponentProps> = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [wppNumber, setWppNumber] = useState("");
  const [email, setEmail] = useState("");
  const [university, setU] = useState("");

  function nameChange(e: CustomEvent) {
    setName(e.detail.value);
  }
  function lastNameChange(e: CustomEvent) {
    setLastName(e.detail.value);
  }
  function wppNumberChange(e: CustomEvent) {
    setWppNumber(e.detail.value);
  }
  function emailChange(e: CustomEvent) {
    const re = /[a-z0-9._%+-]+@eafit.edu.co/;
    console.log(re.test(e.detail.value));
    setEmail(e.detail.value);
  }
  function uChange(e: CustomEvent) {
    setU(e.detail.value);
  }

  function register() {
    console.log(name, lastName, wppNumber, email, university)
  }

  return (
    <IonPage>
      <Header isUser={true} />
      <IonContent>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput onIonChange={nameChange}></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Apellido</IonLabel>
          <IonInput onIonChange={lastNameChange}></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Numero Wpp</IonLabel>
          <IonInput onIonChange={wppNumberChange}></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput onIonChange={emailChange} type="email"></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Universidad</IonLabel>
          <IonInput onIonChange={uChange}></IonInput>
        </IonItem>
        <IonButton
          color="primary"
          expand="block"
          className="ion-margin"
          type="submit"
          onClick={register}
        >
          Crear cuenta
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
