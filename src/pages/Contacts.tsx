import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { PreviewContacto } from "../components/Contact/PreviewContacto";
import { add } from "ionicons/icons";
import { useDiary } from "../hooks/Agenda/useDiary";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { Contact } from "../interfaces";

const Contacts = () => {
  const {
    updateModalFormContact,
    statecontact: { contacts },
  }: any = useDiary();
  const [contactsCategory, setContactsCategory] = useState([]);
  const [category, setCategory] = useState("");

  let {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    let categoryLocate = pathname.split("/");
    let contactosFiltrados = contacts.filter(
      (contact: Contact) => contact.category === categoryLocate[2]
    );
    setCategory(categoryLocate[2]);
    setContactsCategory(contactosFiltrados);
    // eslint-disable-next-line
  }, [contacts]);

  const handleClickFormulaio = () => {
    updateModalFormContact(true);
  };
  return (
    <IonPage>
      <IonContent fullscreen scrollY>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/agenda" />
            </IonButtons>
            <IonTitle
              style={{ marginRight: "3rem" }}
              className="ion-text-center ion-text-uppercase"
            >
              Contacts:<span>{" " + category}</span>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {contactsCategory.length > 0 ? (
          <PreviewContacto contacts={contactsCategory} />
        ) : (
          <IonTitle className="ion-text-center ion-margin-vertical">
            No hay contactos
          </IonTitle>
        )}

        <IonFab
          onClick={handleClickFormulaio}
          className="ion-margin-horizontal ion-margin-vertical"
          vertical="bottom"
          horizontal="end"
          slot="fixed"
        >
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Contacts;
