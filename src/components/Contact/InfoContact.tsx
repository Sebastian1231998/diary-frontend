import {
  IonAvatar,
  IonItemGroup,
  IonTitle,
  IonSegment,
  IonItemDivider,

} from "@ionic/react";
import React from "react";
import { Contact } from "../../interfaces";
import Avatar from "../../assets/img/avatar.svg";
import "./css/InfoContacto.css";

interface ContainerProps {
  contact: Contact;
}

export const InfoContact: React.FC<ContainerProps> = ({ contact }) => {

  return (
    <>
      <IonSegment value="heart">
        <IonItemGroup className="flex-element ion-margin-vertical">
          <IonAvatar className="ion-margin-horizontal">
            <img className="ion-margin" src={Avatar} alt="Avatar"></img>
          </IonAvatar>
          <IonTitle className=" ion-text-center">{contact.name}</IonTitle>
        </IonItemGroup>
      </IonSegment>
      <IonItemDivider className="ion-margin-vertical">
        <span className="label-element">Phone</span>
      </IonItemDivider>
      <p className="p-info">{contact.phone}</p>

      <IonItemDivider className="ion-margin-vertical">
        <span className="label-element">Description</span>
      </IonItemDivider>
      <p className="p-info">{contact.description}</p>

      <IonItemDivider className="ion-margin-vertical">
        <span className="label-element">Address</span>
      </IonItemDivider>
      <p className="p-info">{contact.address}</p>

      <IonItemDivider className="ion-margin-vertical">
        <span className="label-element">Email</span>
      </IonItemDivider>
      <p className="p-info">{contact.email}</p>

      <IonItemDivider className="ion-margin-vertical">
        <span className="label-element">Category</span>
      </IonItemDivider>
      <p className="p-info">{contact.category}</p>
    </>
  );
};
