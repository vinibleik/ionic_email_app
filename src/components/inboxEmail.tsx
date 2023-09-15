import { IonItem, IonLabel, IonThumbnail } from "@ionic/react";

interface InboxEmailProps {
  from: string;
  date: string;
  subject: string;
  text: string;
  image: string;
}

const InboxEmail: React.FC<InboxEmailProps> = ({
  from,
  date,
  subject,
  text,
  image,
}) => {
  return (
    <IonItem
      className="ion-no-margin ion-no-padding"
      color={"secondary"}
      style={{ padding: "10px" }}
    >
      <IonThumbnail slot="start" className="ion-no-padding ion-no-margin">
        <img
          alt="Silhouette of mountains"
          src={image}
          style={{ borderRadius: "50%" }}
        />
      </IonThumbnail>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          fontSize: "17px",
          margin: "0px",
          marginLeft: "10px",
          padding: "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IonLabel>{from}</IonLabel>
          <IonLabel className="ion-padding-end">{date}</IonLabel>
        </div>
        <IonLabel>{subject}</IonLabel>
        <IonLabel>{text}</IonLabel>
      </div>
    </IonItem>
  );
};

export default InboxEmail;
