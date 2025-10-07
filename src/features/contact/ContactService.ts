import { ContactForm } from './ContactTypes';
import { contactAdapter } from '../../adapters/contact/contactAdapter';

export const sendContactForm = async (data: any): Promise<ContactForm> => {
  // Aquí podrías enviar los datos a una API
  return contactAdapter(data);
};
