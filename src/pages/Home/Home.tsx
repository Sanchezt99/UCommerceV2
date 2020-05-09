import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";

/* Components */
import Header from "../../components/Header/Header";
import TypeSelector from "../../components/TypeSelector/TypeSelector";
import List from "../../components/List/List";

const Home: React.FC = () => {
  const [type, setType] = useState<'p' | 's'>('p');

  const typeChange = (value: 'p'|'s') => {
    setType(value);
  };

  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding">
        <TypeSelector selectedType={type} onTypeChange={typeChange} />
        <List typeList={type}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
