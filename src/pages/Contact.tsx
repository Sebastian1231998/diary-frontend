import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDiary } from "../hooks/Agenda/useDiary";
import { InfoContact } from "../components/Contact/InfoContact";
const Contact = () => {

  const {id}:any = useParams()
  const {getContact, statecontact:{contact}}:any = useDiary()

  useEffect(()=>{
 
    getContact(id)
    // eslint-disable-next-line
  },[])

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonButtons slot="start">
              <IonBackButton defaultHref={`/contacts/${contact.category}`} />
            </IonButtons>
            <IonTitle style={{marginRight: '3rem'}} className="ion-text-center ion-text-uppercase">
              Contact
            </IonTitle>
          </IonToolbar>
        </IonHeader>
         <InfoContact 
         contact={contact}
         />
      </IonContent>
    </IonPage>
  );
};

export default Contact;
