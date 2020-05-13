import {IonContent,
    IonPage,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonInput} from "@ionic/react";
import React, { useState } from "react";
import "./SingIn.css";

import { RouteComponentProps } from "react-router";

const SingIn: React.FC<RouteComponentProps> = (props) => {
    /*
            const [name, setName] = useState<string>();
            const [secondName, setSecondName] = useState<string>();
            const [phone, setPhone] = useState<number>();
            const [university, setUniversity] = useState<string>();
            const [email, setEmail] = useState<string>();
    */
    return (
        <IonPage>
            <IonContent>
                <IonList className = "header">
                    <IonTitle color="primary">
                        <h1> Bienvenido a Ucommerce</h1>
                    </IonTitle>
                </IonList>
            </IonContent>

            <IonHeader>
                <IonToolbar>
                    <IonTitle className="second-header">Gracias por hacer parte de nuestra historia!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCard>
                <IonItem className='data-information'>
                    <IonLabel position="floating" color="Primary">email</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonItem className='data-information'>
                    <IonInput type="password" color="dark" placeholder="Contraseña"></IonInput>
                    <IonInput></IonInput>
                </IonItem>
                <IonButton color="secondary" expand="full" className="confirm-button">Ingresar</IonButton>
                <IonInput></IonInput>
                <IonInput></IonInput>
                <IonButton  expand="full" className="confirm-button">¿Olvidaste tu contraseña?</IonButton>
                <IonInput></IonInput>
            </IonCard>
        </IonPage>

    );
};
export default SingIn;

