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
import "./Login.css";

import { RouteComponentProps } from "react-router";

const Login: React.FC<RouteComponentProps> = (props) => {
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
                                            <IonTitle className="second-header">Unete a la familia Ucommerce!</IonTitle>
                                    </IonToolbar>
                            </IonHeader>
                                    <IonCard>
                                    <IonItem className='data-seller'>
                                            <IonLabel position="floating" color="Primary">Nombre</IonLabel>
                                            <IonInput></IonInput>

                                    </IonItem>
                                    <IonItem className='data-seller'>
                                            <IonLabel position="floating" color="Primary">Apellido</IonLabel>
                                            <IonInput></IonInput>
                                    </IonItem>
                                    <IonItem className='data-seller'>
                                            <IonLabel position="floating" color="Primary">celular</IonLabel>
                                            <IonInput></IonInput>
                                    </IonItem>
                                    <IonItem className='data-seller'>
                                            <IonLabel position="floating" color="Primary">email</IonLabel>
                                            <IonInput></IonInput>
                                    </IonItem>
                                    <IonItem className='data-seller'>
                                            <IonLabel position="floating" color="Primary">universidad</IonLabel>
                                            <IonInput></IonInput>
                                    </IonItem>
                                    <IonButton color="success" expand="full" className="create-button">Crear cuenta</IonButton>
                                    <IonInput></IonInput>
                                    <IonInput></IonInput>
                                    </IonCard>
            </IonPage>

        );
};
export default Login;

