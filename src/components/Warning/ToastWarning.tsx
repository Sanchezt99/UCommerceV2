import React from "react";
import { IonToast } from "@ionic/react";

const ToastWarning: React.FC<{
  isError: boolean;
  onErrorChange: (value: boolean) => void;
  errorMessage: string;
}> = (props) => {
  const errorHandler = (e: CustomEvent) => {
    props.onErrorChange(false);
  };

  return (
    <IonToast
      isOpen={props.isError}
      onDidDismiss={errorHandler}
      message={props.errorMessage}
      duration={2000}
    />
  );
};

export default ToastWarning;
