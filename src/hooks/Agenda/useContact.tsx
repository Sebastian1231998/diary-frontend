
const useContact = () => {
  let initialState = {
    contact: {
      _id:"",
      name: "",
      phone: "",
      description: "",
      address: "",
      category: "",
      email:""
    },
    modalcontactform: false,
    contacts: [],
  };

  return [initialState];
};

export default useContact;
