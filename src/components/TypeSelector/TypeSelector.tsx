import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const TypeSelector: React.FC<{
  selectedType: "p" | "s";
  onTypeChange: (value: "p" | "s") => void;
}> = (props) => {
  const typeHandler = (e: CustomEvent) => {
    props.onTypeChange(e.detail.value);
  };

  return (
    <IonSegment
      color="tertiary"
      value={props.selectedType}
      onIonChange={typeHandler}
    >
      <IonSegmentButton value='p'>
        <IonLabel>Productos</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value='s'>
        <IonLabel>Servicios</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default TypeSelector;
