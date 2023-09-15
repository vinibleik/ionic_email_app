import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { logOutOutline, createOutline } from "ionicons/icons";
import InboxEmail from "../components/inboxEmail";

const EMAILS = [
  {
    from: "John Doe",
    date: "19 May",
    subject: "Hello, World!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, quam sapien aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed vitae nisl eget nisl aliquam aliquet. Sed vitae nisl eget nisl aliquam aliquet.",
    image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    from: "Jane Doe",
    date: "18 May",
    subject: "Hello, World!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, quam sapien aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed vitae nisl eget nisl aliquam aliquet. Sed vitae nisl eget nisl aliquam aliquet.",
    image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    from: "John Smith",
    date: "17 May",
    subject: "Hello, World!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, quam sapien aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed vitae nisl eget nisl aliquam aliquet. Sed vitae nisl eget nisl aliquam aliquet.",
    image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
];

const Inbox: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();

  const listEmails = EMAILS.map((email) => {
    return (
      <InboxEmail
        from={email.from}
        date={email.date}
        subject={email.subject}
        text={email.text}
        image={email.image}
      />
    );
  });

  const handleSignOut = async () => {
    await present("Signing out...");
    setTimeout(async () => {
      await dismiss();
      router.push("/", "back");
    }, 1000);
  };

  const handleNewEmail = () => {
    router.push("/new-email", "forward");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="end">
            <IonButton onClick={handleSignOut}>
              Sign out
              <IonIcon slot="end" icon={logOutOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color={"light"}>
        <div
          style={{
            position: "relative",
            height: "100%",
            padding: "5px",
          }}
        >
          <IonCard className="ion-no-margin ion-no-padding" color={"secondary"}>
            <IonCardHeader>
              <IonCardTitle>
                Inbox <IonBadge color={"primary"}>{listEmails.length}</IonBadge>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="ion-no-padding ion-no-margin">
              <IonList
                className="ion-no-padding ion-no-margin"
                lines="none"
                color="success"
                style={{ padding: "5px" }}
              >
                {listEmails}
              </IonList>
            </IonCardContent>
          </IonCard>
          <div
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
            }}
          >
            <IonButton onClick={handleNewEmail}>
              <IonIcon slot="start" icon={createOutline}></IonIcon>
              New email
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inbox;
