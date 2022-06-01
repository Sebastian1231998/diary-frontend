import React, { useEffect, useState } from "react";
import {
  createAnimation,
  IonModal,
  IonContent,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonFabButton,
  IonFab,
  IonIcon,
} from "@ionic/react";
import { close } from "ionicons/icons";
import FormContact from "../Contact/FormContact";
interface ContainerProps {
  modalcontactform: boolean;
  updateModalFormContact: Function;
}

export const ModalFormContact: React.FC<ContainerProps> = ({
  modalcontactform,
  updateModalFormContact,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(modalcontactform);
  }, [modalcontactform]);

  const enterAnimation = (baseEl: any) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root.querySelector("ion-backdrop")!)
      .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector(".modal-wrapper")!)
      .keyframes([
        { offset: 0, opacity: "0", transform: "scale(0)" },
        { offset: 1, opacity: "0.99", transform: "scale(1)" },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing("ease-out")
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: any) => {
    updateModalFormContact(false);
    return enterAnimation(baseEl).direction("reverse");
  };

  const handleClickFab = () => {
    updateModalFormContact(false);
  };


  return (
    <IonContent>
      <IonModal
        isOpen={showModal}
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
      >
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle className="ion-text-center ion-text-uppercase">
              Add a Contact
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <FormContact
        setShowModal={setShowModal}
        />
        <IonFab
          onClick={handleClickFab}
          vertical="bottom"
          horizontal="end"
          slot="static"
        >
          <IonFabButton>
            <IonIcon icon={close} />
          </IonFabButton>
        </IonFab>
      </IonModal>
    </IonContent>
  );
};
