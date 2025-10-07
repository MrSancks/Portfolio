// Adapter for contact form data (example, can be expanded)
export const contactAdapter = (data: any) => {
  return {
    name: data.name,
    email: data.email,
    message: data.message,
  };
};
