import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonPage, IonCard, IonButton} from '@ionic/react';


/* Components */

import Header from "../../components/Header/Header"


const sellers = {
  data : [
    {
      name : 'Cristian D. Ceballos',
      available : "Disponible",
      phone : "3234784442",
    },
    {
      name : 'Mateo Sánchez Toro',
      available : "No disponible",
      phone : "3008057306"
    },
    {
      name : 'Nicolás Roldán',
      available : "Disponible",
      phone: "3127734438"
    }
  ]
}

const Seller: React.FC = () => {

    return (
      <IonPage>
        <Header/>
        <IonContent color="primary">
          <IonCard className="center">
            <Vendedor/>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };

const Vendedor = ()=> {
  return (
    <IonList>
      {
        sellers.data.map((obj, i) => {
          return (
          <IonItem key={i}>
            <IonLabel>{obj.name}</IonLabel>
            <Available obj={obj}/>
          </IonItem>
          )
        })
      }
    </IonList>
);
}

const Available = (obj: any) => {
  const phone = "https://api.whatsapp.com/send?phone=57" + obj.obj.phone + "&text=Hola,quiero%20comprarte%20un%20producto."
  if (obj.obj.available === "Disponible") {
    return (
      <IonButton color="tertiary" href={phone} target="blank"> 
        Contactar
      </IonButton>
    )
  }
  return (
    <IonButton color="danger">
        No disponible
    </IonButton>
  )
}

export default Seller;
