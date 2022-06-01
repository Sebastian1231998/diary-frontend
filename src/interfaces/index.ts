export interface Category{
    name:string;
    id:number;
    avatar:string
}

/** Context Interface **/

export interface Contact{
         _id:string,
        name:string,
        phone:string,
        description:string,
        address:string,
        category:string,
        email:string
}

export interface Agenda{
    contact: Contact,
    modalcontactform:boolean
    contacts:Contact[]
}