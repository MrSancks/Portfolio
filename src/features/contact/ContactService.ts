export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactForm(payload: ContactPayload): Promise<void> {
  // En un entorno real este servicio podría enviar el formulario a un endpoint o proveedor externo.
  // Por ahora simulamos la petición para mantener una experiencia fluida en el portafolio.
  await new Promise((resolve) => setTimeout(resolve, 600));
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.info('Formulario de contacto enviado:', payload);
  }
}
