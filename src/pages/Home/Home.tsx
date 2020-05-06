import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";

/* Components */
import Header from "../../components/HeaderComponent/Header";
import TypeSelector from "../../components/TypeSelector/TypeSelector";
import ProductsList from "../../components/ProductList/ProductList";
import ServiceList from "../../components/ServiceList/ServiceList";

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
        {type === 'p'? <ProductsList />:<ServiceList/>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
