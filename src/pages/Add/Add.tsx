import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonLabel,
  IonItem,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCardTitle,
  IonTextarea
} from "@ionic/react";
/* import "./Add.css"; */

/* Components */

import Header from "../../components/Header/Header";
import { RouteComponentProps } from "react-router";

import TypeSelector from "../../components/TypeSelector/TypeSelector";


const Add: React.FC<RouteComponentProps> = (props) => {
  const [type, setType] = useState<'p' | 's'>('p');

  const changeType = (value: 'p'|'s') => {
    setType(value);
  }
  return (
    <IonPage>
      <Header isUser={true} />
      <IonContent>

      <TypeSelector selectedType={type} onTypeChange={changeType}/>

      <IonCard className='ion-text-center'>

          
          <IonCardTitle className='ion-margin'>{(type === 'p')? 'Agregar producto':'Agregar servicio'}</IonCardTitle>      

          

          {
            (type === 'p')?
                <IonItem className='ion-margin'>
                  <IonLabel>Categoria</IonLabel>
                  <IonSelect placeholder="Categoria" interface='popover'>
                    <IonSelectOption value="Chocolates">Chocolates</IonSelectOption>
                    <IonSelectOption value="Mecato">Mecato</IonSelectOption>
                  </IonSelect>
                </IonItem>
                :
                <IonItem className='ion-margin'>
                  <IonLabel>Categoria</IonLabel>
                  <IonSelect placeholder="Categoria" interface='popover'>
                    <IonSelectOption value="Monitoria">Monitoria</IonSelectOption>
                    <IonSelectOption value="Asesoria">Asesoria</IonSelectOption>
                    <IonSelectOption value="Tutoria">Tutoria</IonSelectOption>
                  </IonSelect>
                </IonItem>
          }
          
          <IonItem className='ion-margin'>
              <IonLabel position="floating" color="Primary">Nombre</IonLabel>
              <IonInput></IonInput>
          </IonItem>

          <IonItem className='ion-margin'>
              <IonLabel position="floating" color="Primary">Precio</IonLabel>
              <IonInput></IonInput>
          </IonItem>

          <IonItem className='ion-margin'>
              <IonLabel position="floating" color="Primary">Descripción</IonLabel>
              <IonTextarea></IonTextarea>
          </IonItem>

          <IonButton routerLink="/SavePS" color='tertiary'>Guardar</IonButton>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};




export default Add;