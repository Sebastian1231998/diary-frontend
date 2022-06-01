import { Agenda } from "../../interfaces";
import {
  UPDATE_MODAL_FORM,
  ADD_CONTACT,
  GET_CONTACTS,
  GET_CONTACT,
} from "../../types";

// eslint-disable-next-line
export default (state: Agenda, action: any) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case UPDATE_MODAL_FORM:
  
      return {
        ...state,
        modalcontactform: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    default:
      return state;
  }

  // eslint-disable-next-line
};
