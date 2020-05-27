import { IonContent, IonPage, IonButton } from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";

/* Components */
import Header from "../../components/Header/Header";
import TypeSelector from "../../components/TypeSelector/TypeSelector";
import List from "../../components/List/List";
import { RouteComponentProps } from "react-router";

const Home: React.FC<RouteComponentProps> = (props) => {
  const [type, setType] = useState<'p' | 's'>('p');

  const typeChange = (value: 'p'|'s') => {
    setType(value);
  };

  return (
    <IonPage>
      <Header isUser={false}/>
      <IonContent className="ion-padding">
        <TypeSelector selectedType={type} onTypeChange={typeChange} />
        <List typeList={type}/>
      </IonContent>
        <IonButton expand="block" className="ion-margin" routerLink='/add'> Agrega tu producto / servicio</IonButton>
    </IonPage>
  );
};

export default Home;
