import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle} from '@ionic/react';

const Header: React.FC = props => {
  return (
    <IonHeader>
      <IonToolbar color="secondary">
        <IonButtons slot="start">
          <IonBackButton/>
        </IonButtons>
        <IonTitle className="ion-text-center">
          UCommerce
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;