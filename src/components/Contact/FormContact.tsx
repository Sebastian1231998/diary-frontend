import {
  IonInput,
  IonItem,
  IonIcon,
  IonButton,
  IonLabel,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonToast,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDiary } from "../../hooks/Agenda/useDiary";

interface ContainerProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContact:React.FC<ContainerProps> = ({setShowModal}) => {


  let {addContact}:any = useDiary()
  const [contacto, setContacto] = useState({
    name: "",
    phone: "",
    description: "",
    address: "",
    category: "",
    email:""
  });

  const [showToast, setShowToast] = useState({
    show:false,
    text:"",
    color:""
  });


  let {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    const arrayPath = pathname.split("/");

    setContacto({
      ...contacto,
      category: arrayPath[2],
    });
    // eslint-disable-next-line
  }, []);



  const handleChangeInput = (e: any) => {
    setContacto({
      ...contacto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitContacto = () => {
    if ([name, phone, description, address, category].includes("")) {
      setShowToast({
        show:true,
        text:"All Fields Required",
        color:"danger"
      });
      return;
    }

    if (phone.length > 10 || phone.length < 10) {
      setShowToast({
        show:true,
        text:"Invalid Phone",
        color:"danger"
      });
      return;
    }

    addContact(contacto)

    setContacto({
      name: "",
      phone: "",
      description: "",
      address: "",
      category: "",
      email:""
    })

    setShowToast({
      show:true,
      text:"Add New Contacto",
      color:"success"
    });

    setTimeout(()=>{
      setShowModal(false)
    },1000)
  };

  let { name, phone, description, address, category, email } = contacto;
  return (
    <>
      <IonContent fullscreen className="ion-padding">
        <IonToast
          isOpen={showToast.show}
          onDidDismiss={() => setShowToast({show:false, text:"", color:""})}
          message={showToast.text}
          duration={200}
          color={showToast.color}
        />
        <IonLabel>Name:</IonLabel>
        <IonItem className="ion-margin-vertical">
          <IonInput
            onIonChange={handleChangeInput}
            name="name"
            value={name}
            placeholder="Enter Name"
          ></IonInput>
        </IonItem>

        <IonLabel>Phone:</IonLabel>
        <IonItem className="ion-margin-vertical">
          <IonInput
            onIonChange={handleChangeInput}
            name="phone"
            value={phone}
            type="number"
            placeholder="Enter Phone"
          ></IonInput>
        </IonItem>

        <IonLabel>Description:</IonLabel>
        <IonItem className="ion-margin-vertical">
          <IonInput
            onIonChange={handleChangeInput}
            name="description"
            value={description}
            placeholder="Enter Description"
          ></IonInput>
        </IonItem>

        <IonLabel>Address:</IonLabel>
        <IonItem className="ion-margin-vertical">
          <IonInput
            onIonChange={handleChangeInput}
            name="address"
            value={address}
            placeholder="Enter Address"
          ></IonInput>
        </IonItem>

        <IonLabel>Email:</IonLabel>
        <IonItem className="ion-margin-vertical">
          <IonInput
            onIonChange={handleChangeInput}
            name="email"
            value={email}
            placeholder="Enter Email"
            type="email"
          ></IonInput>
        </IonItem>

        <IonLabel>Category:</IonLabel>
        <IonSelect className="ion-margin-vertical" value={category}>
          <IonSelectOption value={category}>{category}</IonSelectOption>
        </IonSelect>

        <IonButton
          onClick={handleSubmitContacto}
          color="primary"
          className="ion-margin-top"
          expand="full"
        >
          Add
          <IonIcon icon={add} />
        </IonButton>
      </IonContent>
    </>
  );
};

export default FormContact;
