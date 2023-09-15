import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { sendOutline } from "ionicons/icons";
import React from "react";

const NewEmail: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();

  const handleNewEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await present("Sending Email...");
    setTimeout(async () => {
      await dismiss();
      router.push("/end");
    }, 1000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton color={"light"}></IonBackButton>
          </IonButtons>
          <IonTitle>New Email</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color={"light"}>
        <IonCard color={"secondary"}>
          <IonCardContent>
            <form onSubmit={handleNewEmail}>
              <IonInput
                label="From"
                labelPlacement="floating"
                placeholder="from"
                fill="outline"
                style={{ fontSize: "16px" }}
              ></IonInput>
              <IonInput
                label="To"
                labelPlacement="floating"
                placeholder="to"
                style={{ fontSize: "16px" }}
                fill="outline"
                className="ion-margin-top"
              ></IonInput>
              <IonInput
                label="Subject"
                labelPlacement="floating"
                style={{ fontSize: "16px" }}
                placeholder="Subject"
                fill="outline"
                className="ion-margin-top"
              ></IonInput>
              <IonTextarea
                label="Message"
                style={{ fontSize: "16px" }}
                labelPlacement="floating"
                counter={true}
                className="ion-margin-top"
                rows={10}
                maxlength={200}
                fill="outline"
              ></IonTextarea>
              <IonButton
                style={{ fontSize: "16px" }}
                type="submit"
                className="ion-margin-top ion-float-right ion-margin-bottom"
              >
                Send
                <IonIcon slot="end" icon={sendOutline} />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NewEmail;
