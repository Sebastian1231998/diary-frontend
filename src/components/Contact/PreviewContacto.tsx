import React from "react";
import { IonLabel, IonList, IonItem, IonContent, IonIcon } from "@ionic/react";
import { personAdd, eyeOutline } from "ionicons/icons";
import { Contact } from "../../interfaces";

interface ContainerProps {
  contacts: Contact[];
}

export const PreviewContacto: React.FC<ContainerProps> = ({ contacts }) => {
  return (
    <IonContent>
      {/*-- Item Dividers in a List --*/}
      <IonList>
        {contacts.map((contact) => {
          return (
            <IonItem routerLink={`/contact/${contact._id}`}>
              <IonIcon className="ion-margin-end" icon={personAdd} />
              <IonLabel>{contact.name}</IonLabel>
              <IonIcon icon={eyeOutline} />
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  );
};
