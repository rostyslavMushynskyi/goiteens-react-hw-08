import axios from "axios";

export const getAllContactsService = () =>
  axios.get("/contacts").then((res) => res.data);

export const createContactService = (name, number) =>
  axios.post("/contacts", { name, number }).then((res) => res.data);

export const removeContactService = (id) =>
  axios.delete(`/contacts/${id}`).then((res) => res.data);
