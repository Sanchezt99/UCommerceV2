import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useState } from "react";
import "./SignUp.css";

import { RouteComponentProps } from "react-router";
import Header from "../../components/Header/Header";
import ToastWarning from "../../components/Warning/ToastWarning";

const SignUp: React.FC<RouteComponentProps> = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [wppNumber, setWppNumber] = useState("");
  const [email, setEmail] = useState("");
  const [university, setU] = useState("");
  const [password, setPass] = useState("");
  const [verPassword, setVerPass] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    setEmail(e.detail.value);
  }
  function uChange(e: CustomEvent) {
    setU(e.detail.value);
  }
  function passwordChange(e: CustomEvent) {
    setPass(e.detail.value);
  }
  function verPasswordChange(e: CustomEvent) {
    setVerPass(e.detail.value);
  }

  function onErrorChange(value: boolean) {
    setError(value);
  }

  async function register() {
    if (verifyData()) {
      const data = {
        name: `${name} ${lastName}`,
        email: email,
        password: password,
        wpp_phone: wppNumber,
        src_img: "",
        university: university,
        products: [],
        services: [],
      };
      await fetch("/api", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  function verifyData(): boolean {
    const re = /[a-z0-9._%+-]+@eafit.edu.co/;
    if (!re.test(email)) {
      setErrorMessage("Correo no valido");
      setError(true);
      return false;
    }
    if (password !== verPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      setError(true);
      return false;
    }
    return true;
  }

  return (
    <IonPage>
      <Header isUser={true} />
      <IonContent>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput onIonChange={nameChange} type="text"></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Apellido</IonLabel>
          <IonInput onIonChange={lastNameChange} type="text"></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Numero Wpp</IonLabel>
          <IonInput onIonChange={wppNumberChange} type="tel"></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Universidad</IonLabel>
          <IonSelect interface="popover" onIonChange={uChange}>
            <IonSelectOption value="EAFIT">EAFIT</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Correo</IonLabel>
          <IonInput onIonChange={emailChange} type="email"></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Contraseña</IonLabel>
          <IonInput onIonChange={passwordChange} type="password"></IonInput>
        </IonItem>
        <IonItem className="ion-margin">
          <IonLabel position="floating">Verificar contraseña</IonLabel>
          <IonInput onIonChange={verPasswordChange} type="password"></IonInput>
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

        <ToastWarning
          isError={error}
          errorMessage={errorMessage}
          onErrorChange={onErrorChange}
        />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
