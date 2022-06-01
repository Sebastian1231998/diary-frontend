import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
} from "@ionic/react";
import { categories } from "../services";
import ItemCategory from "../components/Contact/Category";
import { useDiary } from "../hooks/Agenda/useDiary";
import { ModalFormContact } from "../components/Modals/ModalFormContact";
const Diary: React.FC = () => {
  const {
    statecontact: { modalcontactform },
    updateModalFormContact,
  }: any = useDiary();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center ion-text-uppercase">
            Diary
          </IonTitle>
        </IonToolbar>
      </IonHeader>
 
        <IonList>
          <IonListHeader className="font-3">Categories</IonListHeader>

          {categories.map((category) => (
            <ItemCategory key={category.id} category={category} />
          ))}
        </IonList>


      <ModalFormContact
        updateModalFormContact={updateModalFormContact}
        modalcontactform={modalcontactform}
      />
    </IonPage>
  );
};

export default Diary;
