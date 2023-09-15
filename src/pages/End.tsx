import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";

const End: React.FC = () => {
  const router = useIonRouter();

  const handleAlert = () => {
    router.push("/inbox");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Confirmation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={"light"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "flex-start",
            height: "100%",
            paddingTop: "45%",
          }}
        >
          <IonCard color={"secondary"}>
            <IonCardContent className="ion-text-center">
              <IonTitle>Email sent!</IonTitle>
              <IonButton onClick={handleAlert} className="ion-margin-top">
                Go to Inbox
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default End;
