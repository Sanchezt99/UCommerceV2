import React from "react";
import { IonList, IonItem, IonContent, IonPage, IonCard } from "@ionic/react";

/* Components */

import Header from "../../components/Header/Header";

const sellers = {
  data: [
    {
      name: "Cristián Ceballos",
      available: true,
      phone: "3234784442",
    },
    {
      name: "Mateo Sánchez",
      available: false,
      phone: "3008057306",
    },
    {
      name: "Nicolás Roldán",
      available: true,
      phone: "3127734438",
    },
  ],
};

const Seller: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonCard className="center">
          <Vendedor />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

const Vendedor = () => {
  return (
    <IonList>
      {sellers.data.map((obj, i) => {
        const phone =
          "https://api.whatsapp.com/send?phone=57" +
          obj.phone +
          "&text=Hola,quiero%20comprarte%20un%20producto.";
        return (
          <IonItem
            key={i}
            lines="none"
            color={obj.available ? "secondary" : "danger"}
            href={phone}
            detail={true}
            target="_blank"
            disabled={obj.available ? false : true}
          >
            {obj.name}
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default Seller;
