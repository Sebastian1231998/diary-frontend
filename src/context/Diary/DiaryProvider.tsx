import { createContext, useEffect, useReducer } from "react";
import useContact from "../../hooks/Agenda/useContact";
import DiaryReducer from "./DiaryReducer";
import contextAxios from "../../config/axios";

import {
  UPDATE_MODAL_FORM,
  ADD_CONTACT,
  GET_CONTACTS,
  GET_CONTACT,
} from "../../types";

import { Contact } from "../../interfaces";

interface ContainerProps {
  children: any;
}

const DiaryContext = createContext({});

const DiaryProvider: React.FC<ContainerProps> = ({ children }) => {
  let [contact] = useContact();
  const [statecontact, dispatch] = useReducer(DiaryReducer, contact);

  useEffect(() => {
    const getContacts = async () => {
      try {
        let { data } = await contextAxios.get("/contacts");

        dispatch({
          type: GET_CONTACTS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const getContact = (id: string) => {
    let contactoFiltrado = statecontact.contacts.filter(
      (contact: Contact) => contact._id === id
    );

    console.log(statecontact);

    dispatch({
      type: GET_CONTACT,
      payload: contactoFiltrado[0],
    });
  };

  const updateModalFormContact = (valor: boolean) => {
    dispatch({
      type: UPDATE_MODAL_FORM,
      payload: valor,
    });
  };

  const addContact = async (contact: Contact) => {
    try {
      let { data } = await contextAxios.post("/contacts", contact);

      dispatch({
        type: ADD_CONTACT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DiaryContext.Provider
      value={{
        statecontact,
        updateModalFormContact,
        addContact,
        getContact,
      }}
    >
      {children}
    </DiaryContext.Provider>
  );
};

export default DiaryContext;

export { DiaryProvider };
