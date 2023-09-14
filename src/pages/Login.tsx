import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { logIn } from "ionicons/icons";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await present("Logging in...");
    setTimeout(async () => {
      await dismiss();
      router.push("/inbox", "forward");
    }, 1000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="light">
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
            <IonCardContent>
              <form onSubmit={handleLogin}>
                <IonInput
                  placeholder="username"
                  label="Username"
                  labelPlacement="floating"
                  type="text"
                  fill="outline"
                  style={{ fontSize: "16px" }}
                ></IonInput>
                <IonInput
                  className="ion-margin-top"
                  style={{ fontSize: "16px" }}
                  placeholder="********"
                  label="Password"
                  labelPlacement="floating"
                  fill="outline"
                  type="password"
                ></IonInput>
                <IonButton
                  style={{ fontSize: "16px" }}
                  type="submit"
                  className="ion-margin-top"
                  expand="block"
                >
                  Login
                  <IonIcon slot="end" icon={logIn} />
                </IonButton>
              </form>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
