import { IonItem, IonLabel, IonAvatar } from "@ionic/react";
import { Category } from "../../interfaces/index";
import React from "react";

interface ContainerProps {
  category: Category;
}
const ItemCategory: React.FC<ContainerProps> = ({ category }) => {

  return (
    <IonItem
      routerLink={`/contacts/${category.name}`}
    >
      <IonAvatar className="ion-margin-end ion-margin-vertical">
        <img src={category.avatar} alt={category.name} />
      </IonAvatar>
      <IonLabel>{category.name}</IonLabel>
    </IonItem>
  );
};

export default ItemCategory;
